# BenchTech - Base de Données SQLite : Formations Sur-Mesure

Cette base de données relationnelle SQLite normalisée (**3NF**) centralise l'ensemble du catalogue pédagogique, des blocs de compétences modulaires, des contenus de cours et des dossiers clients de BenchTech.

---

## Architecture des Fichiers

| Fichier | Rôle & Description |
| :--- | :--- |
| `schema.sql` | Définition DDL complète : 8 tables relationnelles, clés primaires AUTOINCREMENT, contraintes CHECK et clés étrangères (avec suppression en cascade). |
| `seed.sql` | Données initiales : 6 filières, 4 niveaux, 5 profils participants, 19 blocs de compétences, contenus de modules détaillés (théorie + labs réels) et 1 dossier client de démonstration. |
| `init_db.py` | Script Python d'initialisation, de validation d'intégrité référentielle (`PRAGMA foreign_key_check`) et d'audit des décomptes. |
| `query_examples.py` | Démonstrations pratiques de requêtes SQL : extraction de syllabus complet, recherche d'ateliers pratiques (labs) et export JSON pour le web. |
| `benchtech_formations.db` | Fichier binaire SQLite compilé, léger, autonome et portable. |

---

## Schéma Relationnel des Tables

1. **`filieres`** : Pôles d'expertise BenchTech (*Power BI, Copilot Studio, SQL SGBD, Excel, Linux, Hybride*).
2. **`niveaux`** : Échelons de difficulté (*Fondamentaux, Opérationnel, Avancé, Expert*).
3. **`profils_participants`** : Cibles métiers (*Contrôleurs de gestion, Développeurs, DBAs, Chefs de projet, etc.*).
4. **`blocs_competences`** : Unités pédagogiques modulaires calibrables (durée, objectifs opérationnels, badges).
5. **`contenus_modules`** : Détail des cours (notions théoriques et livrables concrets des ateliers pratiques).
6. **`bloc_profils`** : Table de jointure $N:M$ liant chaque bloc aux profils de participants concernés.
7. **`demandes_sur_mesure`** : Dossiers de devis et conventions émis avec référence unique (`BT-PROG-2026-XXXX`).
8. **`demande_blocs`** : Table de jointure $N:M$ associant les blocs choisis à un dossier client.

---

## Commandes Utiles

### 1. Réinitialiser la base à zéro
```bash
python database/init_db.py
```

### 2. Tester les requêtes d'extraction et l'export JSON
```bash
python database/query_examples.py
```

### 3. Ouvrir la base en ligne de commande SQLite
```bash
sqlite3 database/benchtech_formations.db
```
Exemple de requête :
```sql
SELECT b.code_bloc, b.titre_bloc, b.duree_heures, f.libelle AS filiere
FROM blocs_competences b
JOIN filieres f ON b.id_filiere = f.id_filiere
WHERE b.id_filiere = 1;
```
