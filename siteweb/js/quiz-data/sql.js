/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Architecture SQL, Optimisation des Plans d'Exécution & SGBD Avancé
 * Casse officielle : BenchTech | « shaping tomorrow, today »
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
    "description": "Évaluation de haut niveau : déchiffrage d'EXPLAIN ANALYZE, index couvrants (INCLUDE), deadlocks sous transactions ACID, fenêtrage analytique et CTE récursives.",
    "questions": [
        {
            "scenario": "Sur une table de 50 millions de lignes, une requête exécutant 'SELECT client_id, SUM(montant) FROM commandes WHERE date_commande >= '2024-01-01' GROUP BY client_id' effectue un Seq Scan (Scan complet) de 45 secondes malgré un index existant sur 'date_commande'.",
            "question": "Quel est le diagnostic technique le plus probable fourni par EXPLAIN ANALYZE et la solution optimale ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "L'index est corrompu ; il faut exécuter un DROP INDEX puis le recréer à l'identique.",
                "Le planificateur juge l'index trop sélectif et décide de ne pas l'utiliser car 80% des lignes correspondent au prédicat ; de plus, l'accès à la table pour récupérer client_id et montant génère trop d'I/O aléatoires. La solution est de créer un index couvrant composite sur (date_commande, client_id) incluant montant (INCLUDE) ou de partitionner la table par date.",
                "La clause GROUP BY désactive automatiquement l'utilisation des index B-Tree.",
                "Il faut remplacer le WHERE par un HAVING pour forcer l'indexation."
            ],
            "correct": 1,
            "trapIndex": 3,
            "explanation": "Un optimiseur de coûts (CBO) abandonne un index mono-colonne quand la sélectivité est faible (trop de lignes à ramener), car les allers-retours entre l'index et les blocs de la table (Table Random Access / Bookmark Lookup) coûtent plus cher qu'un scan séquentiel. Un index couvrant (Covering Index) stockant date_commande et client_id avec montant en INCLUDE permet un Index Only Scan ultra-rapide sans toucher à la table."
        },
        {
            "scenario": "Deux transactions concurrentes sous niveau d'isolation 'READ COMMITTED' mettent à jour les mêmes comptes bancaires A et B dans un ordre inversé : T1 met à jour A puis B, T2 met à jour B puis A.",
            "question": "Que se produit-il au niveau du gestionnaire de verrous du SGBD et quelle est la conception préventive ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Les deux transactions fusionnent leurs résultats automatiquement grâce à l'algorithme MVCC.",
                "Un interblocage (Deadlock) survient : le SGBD détecte un cycle d'attente circulaire de verrous exclusifs (X-Lock) et tue l'une des transactions avec une erreur 40P01 ; la solution architecturale impose un ordre strict et uniforme de verrouillage des ressources dans tout le code applicatif.",
                "Le SGBD place la table entière en lecture seule jusqu'au redémarrage du service.",
                "La seconde transaction écrase silencieusement les modifications de la première (Lost Update)."
            ],
            "correct": 1,
            "trapIndex": 3,
            "explanation": "Quand deux transactions verrouillent des lignes en ordre croisé (A->B et B->A), chacune attend le verrou détenu par l'autre. Le graphe d'attente (Wait-For Graph) forme un cycle. Le démon Deadlock Detector détecte ce cycle et abort l'une des transactions (Victim Transaction). La règle absolue de conception est d'imposer un tri systématique des ressources à verrouiller (ex: par identifiant croissant)."
        },
        {
            "scenario": "Vous devez calculer le classement des 3 meilleurs commerciaux par filiale sans exclure les ex æquo, tout en conservant les rangs suivants consécutifs (1, 2, 2, 3 et non 1, 2, 2, 4).",
            "question": "Quelle fonction de fenêtrage ANSI SQL répond exactement à cette spécification analytique ?",
            "difficulty": "Intermédiaire",
            "points": 1,
            "answers": [
                "ROW_NUMBER() OVER (PARTITION BY filiale_id ORDER BY ca DESC)",
                "RANK() OVER (PARTITION BY filiale_id ORDER BY ca DESC)",
                "DENSE_RANK() OVER (PARTITION BY filiale_id ORDER BY ca DESC)",
                "NTILE(3) OVER (PARTITION BY filiale_id ORDER BY ca DESC)"
            ],
            "correct": 2,
            "trapIndex": 1,
            "explanation": "RANK() attribue le même rang aux ex æquo mais laisse des trous dans la numérotation (1, 2, 2, 4). ROW_NUMBER() génère des numéros strictement uniques arbitraires (1, 2, 3, 4). Seul DENSE_RANK() gère les égalités avec des rangs consécutifs sans trou (1, 2, 2, 3)."
        },
        {
            "scenario": "Une entreprise stocke son organigramme hiérarchique managérial dans une table 'employes (id, nom, manager_id)'. Vous devez extraire la chaîne hiérarchique complète d'un employé jusqu'au PDG.",
            "question": "Quelle structure SQL standard est incontournable pour résoudre cette requête de graphe ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Une suite de 10 jointures externes gauches (LEFT JOIN) successives.",
                "Une expression de table commune récursive (WITH RECURSIVE) articulée sur un membre d'ancrage (Anchor Member) et un membre récursif uni par UNION ALL.",
                "Un curseur stocké (CURSOR) avec parcours itératif obligatoire en PL/SQL.",
                "Un déclencheur (TRIGGER) sur la clause SELECT."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "La syntaxe normalisée WITH RECURSIVE (ou WITH CTE sous SQL Server) permet d'interroger des structures hiérarchiques ou de graphes à profondeur variable de manière déclarative et performante, éliminant les chaînes de jointures statiques limitées et les curseurs lents."
        },
        {
            "scenario": "Dans une requête analytique complexe, un développeur utilise 'WHERE UPPER(email) = 'contact@benchtech.ma''. Le plan d'exécution révèle un scan séquentiel complet malgré un index B-Tree présent sur la colonne 'email'.",
            "question": "Pourquoi l'index est-il ignoré et comment remédier au problème sans modifier les données ?",
            "difficulty": "Intermédiaire",
            "points": 1,
            "answers": [
                "L'application d'une fonction scalaire (UPPER) sur une colonne indexée dans le WHERE rend le prédicat non-sargable (non recherchable) ; il faut créer un index fonctionnel sur UPPER(email) ou normaliser les données à l'insertion.",
                "Les index B-Tree ne supportent pas les chaînes de caractères de plus de 10 caractères.",
                "Il faut ajouter 'COLLATE NOCASE' dans le WHERE pour activer l'index.",
                "La casse n'a aucun impact sur les index en base relationnelle."
            ],
            "correct": 0,
            "trapIndex": 2,
            "explanation": "Un prédicat est dit non-sargable (Search Argument Able) dès qu'une colonne indexée est encapsulée dans une fonction scalaire. Le moteur ne peut pas utiliser la structure triée de l'arbre B-Tree car la valeur recherchée est transformée pour chaque ligne. La création d'un index fonctionnel (ex: CREATE INDEX idx_email_upper ON employes(UPPER(email))) résout immédiatement le problème."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["sql"] = themeDefinition;
    window.BenchTechQuizDatabase["sql"] = themeDefinition;
    if ("sql".includes('-')) {
        window.BenchTechQuizDatabase["sql".replace(/-/g, '_')] = themeDefinition;
    }
    if ("sql".includes('_')) {
        window.BenchTechQuizDatabase["sql".replace(/_/g, '-')] = themeDefinition;
    }
})();
