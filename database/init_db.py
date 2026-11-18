#!/usr/bin/env python3
"""
Initialisation et vérification de la base de données SQLite BenchTech Formations.
Emplacement : database/init_db.py
"""

import os
import sqlite3
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "benchtech_formations.db")
SCHEMA_PATH = os.path.join(BASE_DIR, "schema.sql")
SEED_PATH = os.path.join(BASE_DIR, "seed.sql")

def init_database():
    print(f"[*] Initialisation de la base SQLite BenchTech : {DB_PATH}")
    
    # Supprimer l'ancienne base si elle existe pour recréation propre
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
        print("    -> Ancienne base supprimée.")

    conn = sqlite3.connect(DB_PATH)
    conn.execute("PRAGMA foreign_keys = ON;")
    cursor = conn.cursor()

    # 1. Exécution du schéma
    with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
        schema_sql = f.read()
    cursor.executescript(schema_sql)
    print("    -> Schéma DDL (schema.sql) exécuté avec succès.")

    # 2. Exécution du jeu de données (seed)
    with open(SEED_PATH, "r", encoding="utf-8") as f:
        seed_sql = f.read()
    cursor.executescript(seed_sql)
    print("    -> Données d'initialisation (seed.sql) insérées avec succès.")

    conn.commit()

    # 3. Vérifications des tables et décomptes
    print("\n[+] Audit des tables créées :")
    tables = [
        "filieres",
        "niveaux",
        "profils_participants",
        "blocs_competences",
        "contenus_modules",
        "bloc_profils",
        "demandes_sur_mesure",
        "demande_blocs"
    ]

    for table in tables:
        cursor.execute(f"SELECT COUNT(*) FROM {table};")
        count = cursor.fetchone()[0]
        print(f"    - Table '{table:22}' : {count:3} enregistrement(s)")

    # 4. Test d'intégrité référentielle SQLite
    cursor.execute("PRAGMA foreign_key_check;")
    fk_errors = cursor.fetchall()
    if fk_errors:
        print(f"\n[!] ATTENTION : {len(fk_errors)} violation(s) de clés étrangères détectée(s) !")
        for err in fk_errors:
            print("   ", err)
        sys.exit(1)
    else:
        print("\n[✓] Intégrité référentielle 100% validée (0 violation de clé étrangère).")

    conn.close()
    print("[✓] Base de données SQLite prête à l'emploi !")

if __name__ == "__main__":
    init_database()
