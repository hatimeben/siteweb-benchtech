#!/usr/bin/env python3
"""
Script d'export automatique SQLite vers JSON / JS pour le site web BenchTech.
Génère :
  - siteweb/data/catalog.json (Format brut JSON catalogue)
  - siteweb/js/catalog-data.js (Format JS autonome window.BENCHTECH_CATALOG)
  - siteweb/data/quiz-pool.json (Pool des 40 questions de quiz)
  - siteweb/js/quiz-data/quiz-pool-data.js (Format JS autonome window.BenchTechQuizPool)
  - Mise à jour automatique des banques de questions par thème (sql.js, powerbi.js, copilot.js, excel.js)
Emplacement : database/export_to_web.py
"""

import json
import os
import sqlite3

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
DB_PATH = os.path.join(BASE_DIR, "benchtech_formations.db")

DATA_DIR = os.path.join(PROJECT_ROOT, "siteweb", "data")
JS_DIR = os.path.join(PROJECT_ROOT, "siteweb", "js")
QUIZ_DATA_DIR = os.path.join(JS_DIR, "quiz-data")

CATALOG_JSON_PATH = os.path.join(DATA_DIR, "catalog.json")
CATALOG_JS_PATH = os.path.join(JS_DIR, "catalog-data.js")
QUIZ_JSON_PATH = os.path.join(DATA_DIR, "quiz-pool.json")
QUIZ_JS_PATH = os.path.join(QUIZ_DATA_DIR, "quiz-pool-data.js")

def export_all():
    print(f"[*] Connexion à la base de données : {DB_PATH}")
    if not os.path.exists(DB_PATH):
        raise FileNotFoundError(f"Base de données introuvable : {DB_PATH}")

    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(JS_DIR, exist_ok=True)
    os.makedirs(QUIZ_DATA_DIR, exist_ok=True)

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # =========================================================================
    # 1. EXPORT DU CATALOGUE DES FORMATIONS SUR-MESURE
    # =========================================================================
    print("[*] Export du catalogue des formations sur-mesure...")
    catalog_data = {
        "metadata": {
            "title": "Catalogue des Formations Sur-Mesure BenchTech",
            "version": "2026.1",
            "source": "benchtech_formations.db",
            "author": "BenchTech Ingénierie Pédagogique"
        },
        "filieres": [],
        "niveaux": [],
        "profils": []
    }

    cursor.execute("SELECT id_niveau, code, libelle, description, ordre_hierarchique FROM niveaux ORDER BY ordre_hierarchique ASC;")
    catalog_data["niveaux"] = [dict(r) for r in cursor.fetchall()]

    cursor.execute("SELECT id_profil, code, libelle, prerequis_recommandes FROM profils_participants WHERE est_actif = 1 ORDER BY id_profil ASC;")
    catalog_data["profils"] = [dict(r) for r in cursor.fetchall()]

    cursor.execute("SELECT id_filiere, code, libelle, description, icone FROM filieres WHERE est_actif = 1 ORDER BY id_filiere ASC;")
    filieres_rows = cursor.fetchall()

    for f_row in filieres_rows:
        filiere_dict = dict(f_row)
        f_id = filiere_dict["id_filiere"]

        cursor.execute("""
            SELECT 
                b.id_bloc,
                b.code_bloc,
                b.titre_bloc,
                b.duree_heures,
                b.badge_technique,
                b.objectif_operationnel,
                b.ordre_pedagogique,
                n.code AS niveau_code,
                n.libelle AS niveau_libelle
            FROM blocs_competences b
            JOIN niveaux n ON b.id_niveau = n.id_niveau
            WHERE b.id_filiere = ? AND b.est_actif = 1
            ORDER BY b.ordre_pedagogique ASC;
        """, (f_id,))
        blocs_rows = cursor.fetchall()
        
        blocs_list = []
        for b_row in blocs_rows:
            bloc_dict = dict(b_row)
            b_id = bloc_dict["id_bloc"]

            cursor.execute("""
                SELECT 
                    id_module,
                    titre_module,
                    theorie_notions,
                    atelier_lab,
                    duree_minutes,
                    ordre_affichage
                FROM contenus_modules
                WHERE id_bloc = ?
                ORDER BY ordre_affichage ASC;
            """, (b_id,))
            bloc_dict["modules"] = [dict(m) for m in cursor.fetchall()]

            cursor.execute("""
                SELECT p.code, p.libelle, bp.pertinence
                FROM bloc_profils bp
                JOIN profils_participants p ON bp.id_profil = p.id_profil
                WHERE bp.id_bloc = ?;
            """, (b_id,))
            bloc_dict["profils_cibles"] = [dict(p) for p in cursor.fetchall()]

            blocs_list.append(bloc_dict)

        filiere_dict["blocs"] = blocs_list
        catalog_data["filieres"].append(filiere_dict)

    with open(CATALOG_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog_data, f, ensure_ascii=False, indent=2)
    print(f"    -> [✓] JSON : {CATALOG_JSON_PATH}")

    with open(CATALOG_JS_PATH, "w", encoding="utf-8") as f:
        f.write("/**\n * Catalogue Pédagogique Officiel BenchTech - Généré depuis benchtech_formations.db\n */\n\n")
        f.write("window.BENCHTECH_CATALOG = ")
        json.dump(catalog_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"    -> [✓] JS   : {CATALOG_JS_PATH}")

    # =========================================================================
    # 2. EXPORT DU POOL DE QUESTIONS DE QUIZ (40 QUESTIONS)
    # =========================================================================
    print("[*] Export du pool de questions de quiz (SQLite -> JSON & JS)...")
    
    cursor.execute("""
        SELECT id_theme, code, titre, icone, source_standard, id_filiere, questions_par_session
        FROM quiz_themes
        WHERE est_actif = 1
        ORDER BY id_theme ASC;
    """)
    themes_rows = cursor.fetchall()
    
    quiz_pool = {
        "metadata": {
            "title": "Banque de Questions Dynamique BenchTech Academy",
            "version": "2026.1",
            "total_questions": 0,
            "session_sample_size": 10,
            "source": "benchtech_formations.db"
        },
        "themes": {}
    }

    all_questions_flat = []

    for t_row in themes_rows:
        t_dict = dict(t_row)
        theme_id = t_dict["id_theme"]
        theme_code = t_dict["code"]

        # Questions de ce thème
        cursor.execute("""
            SELECT 
                q.id_question,
                q.scenario,
                q.question,
                q.difficulte AS difficulty,
                q.points,
                q.explication AS explanation,
                b.code_bloc,
                b.titre_bloc
            FROM quiz_questions q
            LEFT JOIN blocs_competences b ON q.id_bloc = b.id_bloc
            WHERE q.id_theme = ? AND q.est_actif = 1
            ORDER BY 
                CASE q.difficulte 
                    WHEN 'Fondamentaux' THEN 1
                    WHEN 'Opérationnel' THEN 2
                    WHEN 'Avancé' THEN 3
                    WHEN 'Expert' THEN 4
                END, q.id_question ASC;
        """, (theme_id,))
        q_rows = cursor.fetchall()

        theme_questions = []
        for q_row in q_rows:
            q_dict = dict(q_row)
            q_id = q_dict["id_question"]

            # Réponses associées
            cursor.execute("""
                SELECT texte_reponse, est_correcte, est_piege, ordre_affichage
                FROM quiz_reponses
                WHERE id_question = ?
                ORDER BY ordre_affichage ASC;
            """, (q_id,))
            answers_rows = cursor.fetchall()

            answers_texts = []
            correct_index = 0
            trap_index = 0

            for idx, a_row in enumerate(answers_rows):
                answers_texts.append(a_row["texte_reponse"])
                if a_row["est_correcte"] == 1:
                    correct_index = idx
                if a_row["est_piege"] == 1:
                    trap_index = idx

            q_obj = {
                "id": q_dict["id_question"],
                "scenario": q_dict["scenario"],
                "question": q_dict["question"],
                "difficulty": q_dict["difficulty"],
                "points": q_dict["points"],
                "answers": answers_texts,
                "correct": correct_index,
                "trapIndex": trap_index,
                "explanation": q_dict["explanation"],
                "linkedBlockCode": q_dict["code_bloc"],
                "linkedBlockTitle": q_dict["titre_bloc"],
                "themeCode": theme_code
            }
            theme_questions.append(q_obj)
            all_questions_flat.append(q_obj)

        t_dict["questions"] = theme_questions
        t_dict["total_questions"] = len(theme_questions)
        quiz_pool["themes"][theme_code] = t_dict

    quiz_pool["metadata"]["total_questions"] = len(all_questions_flat)

    # Écriture de quiz-pool.json
    with open(QUIZ_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(quiz_pool, f, ensure_ascii=False, indent=2)
    print(f"    -> [✓] JSON : {QUIZ_JSON_PATH}")

    # Écriture de quiz-pool-data.js
    with open(QUIZ_JS_PATH, "w", encoding="utf-8") as f:
        f.write("/**\n * Pool Central des 40 Questions de Diagnostic BenchTech - Généré depuis benchtech_formations.db\n */\n\n")
        f.write("window.BenchTechQuizPool = ")
        json.dump(quiz_pool, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"    -> [✓] JS   : {QUIZ_JS_PATH}")

    # Synchronisation des fichiers js/quiz-data/<theme>.js individuels
    studio_map = {
        "sql": {"studioTarget": "sql-studio", "recommendedCourse": "Formation SQL Sur-Mesure : Requêtage Analytique & Query Tuning", "formTopic": "Formation SQL Sur-Mesure"},
        "powerbi": {"studioTarget": "powerbi-studio", "recommendedCourse": "Formation Power BI Sur-Mesure : DAX & Modélisation", "formTopic": "Formation Power BI Sur-Mesure"},
        "copilot": {"studioTarget": "copilot-studio", "recommendedCourse": "Formation Copilot Studio : Conception d'Agents IA", "formTopic": "Formation Copilot Studio"},
        "excel": {"studioTarget": "excel-studio", "recommendedCourse": "Formation Excel Avancé : Power Query & Modélisation", "formTopic": "Formation Excel Sur-Mesure"}
    }

    for t_code, t_data in quiz_pool["themes"].items():
        theme_file_path = os.path.join(QUIZ_DATA_DIR, f"{t_code}.js")
        meta = studio_map.get(t_code, {"studioTarget": "studios-sur-mesure", "recommendedCourse": "Formation Sur-Mesure", "formTopic": "Formation Sur-Mesure"})
        
        js_content = f"""/**
 * BenchTech Academy - Banque de Questions Dynamique
 * Thématique : {t_data['titre']}
 * Généré automatiquement depuis benchtech_formations.db (Pool de 40 questions)
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {{}};

(function() {{
    const themeDefinition = {{
        "id": "{t_code}",
        "title": {json.dumps(t_data['titre'], ensure_ascii=False)},
        "icon": "{t_data['icone']}",
        "source": {json.dumps(t_data['source_standard'], ensure_ascii=False)},
        "duration": "10-12 min",
        "studioTarget": "{meta['studioTarget']}",
        "recommendedCourse": "{meta['recommendedCourse']}",
        "formTopic": "{meta['formTopic']}",
        "maxQuestionsPerSession": 10,
        "description": "Évaluation de haut niveau calibrée par BenchTech avec scénarios d'entreprise réels et diagnostics opérationnels.",
        "questions": {json.dumps(t_data['questions'], ensure_ascii=False, indent=8)}
    }};

    window.BenchTechQuizDatabase['{t_code}'] = themeDefinition;
    window.BenchTechQuizDatabase['{t_code.replace("-", "_")}'] = themeDefinition;
}})();
"""
        with open(theme_file_path, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"    -> [✓] Thème mis à jour : {theme_file_path} ({len(t_data['questions'])} questions)")

    conn.close()
    print(f"\n[+] Exportation globale réussie : 40 questions synchronisées vers le web.")

if __name__ == "__main__":
    export_all()
