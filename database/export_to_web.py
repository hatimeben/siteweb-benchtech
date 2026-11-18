#!/usr/bin/env python3
"""
Script d'export automatique SQLite vers JSON / JS pour le site web BenchTech.
Génère :
  - siteweb/data/catalog.json (Format brut JSON)
  - siteweb/js/catalog-data.js (Format JS autonome window.BENCHTECH_CATALOG)
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

JSON_OUTPUT_PATH = os.path.join(DATA_DIR, "catalog.json")
JS_OUTPUT_PATH = os.path.join(JS_DIR, "catalog-data.js")

def export_catalog():
    print(f"[*] Connexion à la base de données : {DB_PATH}")
    if not os.path.exists(DB_PATH):
        raise FileNotFoundError(f"Base de données introuvable : {DB_PATH}")

    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(JS_DIR, exist_ok=True)

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

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

    # 1. Extraction des Niveaux
    cursor.execute("SELECT id_niveau, code, libelle, description, ordre_hierarchique FROM niveaux ORDER BY ordre_hierarchique ASC;")
    catalog_data["niveaux"] = [dict(r) for r in cursor.fetchall()]

    # 2. Extraction des Profils
    cursor.execute("SELECT id_profil, code, libelle, prerequis_recommandes FROM profils_participants WHERE est_actif = 1 ORDER BY id_profil ASC;")
    catalog_data["profils"] = [dict(r) for r in cursor.fetchall()]

    # 3. Extraction des Filières et de leurs Blocs / Modules
    cursor.execute("SELECT id_filiere, code, libelle, description, icone FROM filieres WHERE est_actif = 1 ORDER BY id_filiere ASC;")
    filieres_rows = cursor.fetchall()

    for f_row in filieres_rows:
        filiere_dict = dict(f_row)
        f_id = filiere_dict["id_filiere"]

        # Blocs de cette filière
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

            # Contenus / Modules & Labs pour ce bloc
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

            # Profils cibles associés
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

    conn.close()

    # Écriture du fichier JSON
    with open(JSON_OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog_data, f, ensure_ascii=False, indent=2)
    print(f"[✓] Fichier JSON exporté : {JSON_OUTPUT_PATH}")

    # Écriture du fichier JS autonome (window.BENCHTECH_CATALOG)
    with open(JS_OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write("/**\n")
        f.write(" * Catalogue Pédagogique Officiel BenchTech - Généré depuis benchtech_formations.db\n")
        f.write(" * Ne pas modifier manuellement ce fichier. Utilisez database/export_to_web.py.\n")
        f.write(" */\n\n")
        f.write("window.BENCHTECH_CATALOG = ")
        json.dump(catalog_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"[✓] Fichier JS exporté : {JS_OUTPUT_PATH}")

    # Résumé
    total_blocs = sum(len(f["blocs"]) for f in catalog_data["filieres"])
    print(f"[+] Synchronisation terminée : {len(catalog_data['filieres'])} filières, {total_blocs} blocs exportés.")

if __name__ == "__main__":
    export_catalog()
