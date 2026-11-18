/**
 * BenchTech Academy - Banque de Questions Dynamique
 * Thématique : Architecture SQL, Optimisation des Plans d'Exécution & SGBD Avancé
 * Généré automatiquement depuis benchtech_formations.db (Pool de 40 questions)
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
        "id": "sql",
        "title": "Architecture SQL, Optimisation des Plans d'Exécution & SGBD Avancé",
        "icon": "fa-database",
        "source": "Standards ANSI SQL:2016, PostgreSQL & Microsoft SQL Server Internals",
        "duration": "10-12 min",
        "studioTarget": "sql-studio",
        "recommendedCourse": "Formation SQL Sur-Mesure : Requêtage Analytique & Query Tuning",
        "formTopic": "Formation SQL Sur-Mesure",
        "maxQuestionsPerSession": 10,
        "description": "Évaluation de haut niveau calibrée par BenchTech avec scénarios d'entreprise réels et diagnostics opérationnels.",
        "questions": [
        {
                "id": 1,
                "scenario": "Une table 'commandes' contient une colonne 'statut' recevant des valeurs 'EN_ATTENTE', 'PAYEE', 'LIVREE'. Vous souhaitez interdire toute autre saisie directement au niveau du moteur SGBD.",
                "question": "Quelle contrainte d'intégrité SQL standard devez-vous implémenter sur la colonne ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                        "Une contrainte CHECK avec la liste des valeurs autorisées IN (...).",
                        "Une contrainte UNIQUE pour empêcher les doublons de statuts.",
                        "Une contrainte FOREIGN KEY pointant sur la table elle-même.",
                        "Un trigger côté applicatif dans le code PHP/Python."
                ],
                "correct": 0,
                "trapIndex": 3,
                "explanation": "La contrainte CHECK permet de valider une condition booléenne sur chaque ligne insérée ou modifiée (ex: CHECK (statut IN ('EN_ATTENTE', 'PAYEE', 'LIVREE'))). Elle protège la base de données au niveau du moteur contre toute corruption de données.",
                "linkedBlockCode": "SQL-MOD-01",
                "linkedBlockTitle": "Modélisation Relationnelle 3NF & Intégrité Référentielle",
                "themeCode": "sql"
        },
        {
                "id": 2,
                "scenario": "Lors d'une jointure entre 'clients' et 'factures', vous remarquez que les clients sans facture sont exclus du résultat avec INNER JOIN.",
                "question": "Quel type de jointure SQL permet d'afficher l'intégralité des clients, y compris ceux n'ayant aucune facture associée ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                        "LEFT OUTER JOIN (ou LEFT JOIN).",
                        "CROSS JOIN pour générer un produit cartésien complet.",
                        "RIGHT JOIN sur la table factures uniquement.",
                        "FULL OUTER JOIN uniquement car le LEFT JOIN filtre les NULLs."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "LEFT OUTER JOIN (ou LEFT JOIN) conserve toutes les lignes de la table de gauche (clients) et complète les colonnes de la table de droite par des valeurs NULL en cas d'absence de correspondance.",
                "linkedBlockCode": "SQL-MOD-01",
                "linkedBlockTitle": "Modélisation Relationnelle 3NF & Intégrité Référentielle",
                "themeCode": "sql"
        },
        {
                "id": 3,
                "scenario": "Vous devez calculer le chiffre d'affaires cumulé chronologique de chaque filiale sans réécrire de sous-requête corrélée ou de boucle procédurale.",
                "question": "Quelle clause SQL analytique moderne devez-vous employer avec SUM(montant) ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "SUM(montant) OVER (PARTITION BY filiale_id ORDER BY date_vente).",
                        "GROUP BY filiale_id, date_vente WITH CUBE.",
                        "SUM(montant) GROUP BY filiale_id HAVING date_vente <= CURRENT_DATE.",
                        "SUM(montant) WHERE ORDER BY date_vente."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "La clause OVER (PARTITION BY filiale_id ORDER BY date_vente) applique la fonction d'agrégation sous forme de calcul de fenêtre sans regrouper ni réduire les lignes retournées.",
                "linkedBlockCode": "SQL-WIN-02",
                "linkedBlockTitle": "SQL Analytique Avancé & Window Functions (OVER / PARTITION)",
                "themeCode": "sql"
        },
        {
                "id": 4,
                "scenario": "Dans un rapport de performance commerciale, vous devez classer les commerciaux par chiffre d'affaires. En cas d'égalité sur le montant (ex: 2 ex-aequo au rang 1), le commercial suivant doit recevoir le rang 2 (sans saut de numéro).",
                "question": "Quelle fonction de fenêtrage analytique garantit une numérotation continue sans saut de rang ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "DENSE_RANK() OVER (ORDER BY montant DESC).",
                        "RANK() OVER (ORDER BY montant DESC).",
                        "ROW_NUMBER() OVER (ORDER BY montant DESC).",
                        "NTILE(10) OVER (ORDER BY montant DESC)."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "DENSE_RANK() attribue le même rang aux valeurs identiques sans laisser de trou dans la suite des entiers (1, 1, 2), contrairement à RANK() qui aurait sauté au rang 3 (1, 1, 3).",
                "linkedBlockCode": "SQL-WIN-02",
                "linkedBlockTitle": "SQL Analytique Avancé & Window Functions (OVER / PARTITION)",
                "themeCode": "sql"
        },
        {
                "id": 5,
                "scenario": "Une requête filtrant sur une date 'WHERE date_tronquee = DATE(date_creation)' refuse d'utiliser l'index standard B-Tree existant sur 'date_creation'.",
                "question": "Pour quelle raison technique l'optimiseur de requêtes ignore-t-il l'index existant ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "L'appel d'une fonction sur la colonne indexée rend le prédicat non 'sargable' (Search Argument Able).",
                        "Les index B-Tree ne supportent pas les types de données temporels (TIMESTAMP).",
                        "Il faut exécuter un VACUUM ANALYZE pour forcer l'index.",
                        "Le format des dates en base de données doit toujours être converti en chaîne VARCHAR."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "L'encapsulation d'une colonne indexée dans une fonction (comme DATE() ou UPPER()) empêche l'optimiseur d'utiliser directement l'arborescence B-Tree de la colonne brute. La solution consiste à créer un index fonctionnel ou à réécrire la clause en intervalle (Sargable : WHERE date_creation >= '...' AND date_creation < '...').",
                "linkedBlockCode": "SQL-EXP-03",
                "linkedBlockTitle": "Diagnostic des Plans d'Exécution (EXPLAIN ANALYZE)",
                "themeCode": "sql"
        },
        {
                "id": 6,
                "scenario": "Dans un rapport PostgreSQL EXPLAIN (ANALYZE, BUFFERS), vous observez le message : 'Sort Method: external merge Disk: 48500kB'. Le tri s'exécute en 4,2 secondes.",
                "question": "Quelle est l'origine de cette lenteur et comment la corriger au niveau configuration ou session ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Le tri déborde sur disque car 'work_mem' est insuffisant ; il faut augmenter temporairement work_mem pour trier en RAM.",
                        "Le disque dur est fragmenté ; il faut réindexer la table avec REINDEX.",
                        "La table contient trop d'index B-Tree actifs qui ralentissent les tris.",
                        "Il faut supprimer la clause ORDER BY et trier les résultats dans le frontend web."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Le volume de données à trier dépasse la mémoire allouée par le paramètre 'work_mem'. Le moteur bascule alors le tri sur les disques temporaires (External Sort), générant des I/O massives. Augmenter temporairement work_mem (ex: SET work_mem = '64MB') permet un tri en mémoire (quicksort).",
                "linkedBlockCode": "SQL-EXP-03",
                "linkedBlockTitle": "Diagnostic des Plans d'Exécution (EXPLAIN ANALYZE)",
                "themeCode": "sql"
        },
        {
                "id": 7,
                "scenario": "Sur une table de 20 millions de factures, une requête fréquente 'SELECT client_id, SUM(total) FROM factures WHERE statut = 'IMPAYEE' GROUP BY client_id' consomme 80% des ressources CPU.",
                "question": "Quel type d'index spécialisé est le plus performant et économique en espace de stockage pour ce cas ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Un index partiel composite : CREATE INDEX ON factures(client_id, total) WHERE statut = 'IMPAYEE'.",
                        "Un index plein texte GIN sur l'ensemble de la table factures.",
                        "Un index B-Tree classique sur la seule colonne statut.",
                        "Un index UNIQUE sur la colonne client_id pour éliminer les doublons."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Un index partiel (Partial Index) avec la clause 'WHERE statut = 'IMPAYEE'' n'indexe que la fraction des factures impayées (souvent < 5% du volume total). Il est minuscule en RAM, rapide à maintenir et ultra-efficace pour cette requête.",
                "linkedBlockCode": "SQL-IDX-04",
                "linkedBlockTitle": "Indexation Stratégique B-Tree & Index Couvrants",
                "themeCode": "sql"
        },
        {
                "id": 8,
                "scenario": "Deux transactions bancaires concurrentes exécutent des mises à jour croisées : la transaction T1 met à jour le compte A puis B, tandis que T2 met à jour le compte B puis A. Le serveur déclenche une erreur 'Deadlock detected'.",
                "question": "Quelle règle d'architecture logicielle élimine définitivement les risques d'interblocages (deadlocks) ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Imposer un ordre strict et uniforme de verrouillage des entités (ex: tri par ID croissant).",
                        "Augmenter le paramètre deadlock_timeout à 60 minutes pour laisser les transactions finir.",
                        "Passer le niveau d'isolation en READ UNCOMMITTED sur toutes les transactions.",
                        "Supprimer les clés primaires sur les tables des comptes."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Un deadlock survient lorsqu'il y a un cycle dans le graphe d'attente des verrous. Imposer un ordre global et strict de verrouillage des ressources (ex: toujours trier les IDs de comptes dans l'ordre croissant avant de les modifier) empêche structurellement la formation de cycles d'attente.",
                "linkedBlockCode": "SQL-TXN-05",
                "linkedBlockTitle": "Transactions ACID, Modèle MVCC & Résolution des Deadlocks",
                "themeCode": "sql"
        },
        {
                "id": 9,
                "scenario": "Une requête ultra-fréquente 'SELECT montant, date_paiement FROM transactions WHERE compte_id = 4502' effectue systématiquement un 'Index Scan' suivi d'un 'Table Read / Heap Fetch' volumineux pour chaque ligne.",
                "question": "Quelle technique d'indexation permet d'atteindre un 'Index Only Scan' (zéro lecture sur la table physique) ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                        "Créer un index couvrant avec la clause INCLUDE : CREATE INDEX ON transactions(compte_id) INCLUDE (montant, date_paiement).",
                        "Créer trois index B-Tree distincts sur compte_id, montant et date_paiement.",
                        "Forcer l'optimiseur avec une directive SET enable_seqscan = off.",
                        "Convertir la table au format mémoire UNLOGGED."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Un index couvrant incluant les colonnes nécessaires avec la clause INCLUDE (ex: CREATE INDEX ON transactions(compte_id) INCLUDE (montant, date_paiement)) stocke les données additionnelles au niveau des feuilles de l'index sans alourdir la clé d'arborescence, évitant tout accès à la table principale.",
                "linkedBlockCode": "SQL-IDX-04",
                "linkedBlockTitle": "Indexation Stratégique B-Tree & Index Couvrants",
                "themeCode": "sql"
        },
        {
                "id": 10,
                "scenario": "Sous le moteur PostgreSQL et son modèle MVCC, une table transactionnelle subissant 500 UPDATEs par seconde voit sa taille physique passer de 1 Go à 25 Go en 3 jours avec une dégradation majeure des temps de lecture séquentielle.",
                "question": "Quel phénomène de rétention interne explique ce gonflement (Bloat) et quelle en est la cause racine ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                        "L'accumulation de tuples morts non récupérables par VACUUM en raison d'une transaction longue ou d'un slot de réplication inactif.",
                        "Une saturation du cache tampon shared_buffers qui écrit des fichiers d'échange swap.",
                        "La corruption systématique des index B-Tree lors des commandes INSERT/UPDATE.",
                        "Une fuite de mémoire dans le pooler de connexions PgBouncer."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Sous MVCC, un UPDATE n'écrase pas l'ancienne ligne : il marque l'ancien tuple comme mort et insère un nouveau tuple. Si une transaction longue ou un curseur reste ouvert en arrière-plan, le démon VACUUM ne peut pas libérer les anciens tuples dont le xmin est visible par cette transaction, provoquant un bloat massif.",
                "linkedBlockCode": "SQL-TXN-05",
                "linkedBlockTitle": "Transactions ACID, Modèle MVCC & Résolution des Deadlocks",
                "themeCode": "sql"
        }
]
    };

    window.BenchTechQuizDatabase['sql'] = themeDefinition;
    window.BenchTechQuizDatabase['sql'] = themeDefinition;
})();
