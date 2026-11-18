#!/usr/bin/env python3
"""
Exemples de requêtes d'exploitation pour la base SQLite BenchTech Formations.
Emplacement : database/query_examples.py
"""

import json
import os
import sqlite3

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "benchtech_formations.db")

def run_demonstration():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    print("=" * 80)
    print("DÉMONSTRATION 1 : EXTRACTION D'UN SYLLABUS CLIENT COMPLET PAR DOSSIER")
    print("=" * 80)
    
    ref_dossier = "BT-PROG-2026-X89B"
    query_dossier = """
    SELECT 
        d.reference_dossier,
        d.nom_entreprise,
        d.departement_service,
        d.format_animation,
        d.rythme_envisage,
        d.volume_horaire_total,
        b.code_bloc,
        b.titre_bloc,
        b.duree_heures,
        b.badge_technique,
        b.objectif_operationnel,
        f.libelle AS nom_filiere,
        n.libelle AS niveau_difficulte
    FROM demandes_sur_mesure d
    JOIN demande_blocs db ON d.id_demande = db.id_demande
    JOIN blocs_competences b ON db.id_bloc = b.id_bloc
    JOIN filieres f ON b.id_filiere = f.id_filiere
    JOIN niveaux n ON b.id_niveau = n.id_niveau
    WHERE d.reference_dossier = ?
    ORDER BY db.position_sequence ASC;
    """
    cursor.execute(query_dossier, (ref_dossier,))
    rows = cursor.fetchall()
    
    if rows:
        header = rows[0]
        print(f"Dossier Réf : {header['reference_dossier']} | Entreprise : {header['nom_entreprise']}")
        print(f"Service     : {header['departement_service']}")
        print(f"Format      : {header['format_animation']} | Rythme : {header['rythme_envisage']}")
        print(f"Durée totale: {header['volume_horaire_total']} heures")
        print("\nBlocs pédagogiques retenus :")
        for i, r in enumerate(rows, 1):
            print(f"  [{i}] {r['code_bloc']} - {r['titre_bloc']} ({r['duree_heures']}h) [{r['badge_technique']}]")
            print(f"      Objectif : {r['objectif_operationnel']}")
    
    print("\n" + "=" * 80)
    print("DÉMONSTRATION 2 : EXTRACTION DES ATELIERS PRATIQUES (LABS) PAR BLOC")
    print("=" * 80)
    query_labs = """
    SELECT 
        b.code_bloc,
        b.titre_bloc,
        m.titre_module,
        m.theorie_notions,
        m.atelier_lab
    FROM blocs_competences b
    JOIN contenus_modules m ON b.id_bloc = m.id_bloc
    ORDER BY b.id_bloc, m.ordre_affichage;
    """
    cursor.execute(query_labs)
    labs = cursor.fetchall()
    for lab in labs:
        print(f"[{lab['code_bloc']}] Module : {lab['titre_module']}")
        print(f"  • Notions  : {lab['theorie_notions']}")
        print(f"  • Lab Réel : {lab['atelier_lab']}\n")

    print("=" * 80)
    print("DÉMONSTRATION 3 : EXPORT EN FORMAT JSON POUR LE FRONTEND WEB")
    print("=" * 80)
    query_export = """
    SELECT 
        b.code_bloc AS id,
        b.titre_bloc AS name,
        b.duree_heures || 'h' AS duration,
        b.badge_technique AS badge,
        b.objectif_operationnel AS objective
    FROM blocs_competences b
    WHERE b.id_filiere = 1 -- Power BI
    ORDER BY b.ordre_pedagogique ASC;
    """
    cursor.execute(query_export)
    pbi_blocks = [dict(row) for row in cursor.fetchall()]
    print(json.dumps(pbi_blocks[:3], indent=2, ensure_ascii=False))
    print(f"(... {len(pbi_blocks)} blocs exportés au format JSON)")

    conn.close()

if __name__ == "__main__":
    run_demonstration()
