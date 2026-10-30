/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Microsoft Excel Avancé, M-Engine Power Query & Modélisation
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "excel",
    "title": "Microsoft Excel Avancé, M-Engine Power Query & Modélisation",
    "icon": "fa-file-excel",
    "source": "Standards Microsoft Excel & Power Query M Specification",
    "duration": "8-10 min",
    "studioTarget": "excel-studio",
    "recommendedCourse": "Formation Excel Sur-Mesure : Formules Avancées, TCD & Power Query",
    "formTopic": "Formation Excel Sur-Mesure",
    "description": "Évaluation orientée volumétrie et robustesse : formules matricielles dynamiques, RECHERCHEX avec critères multiples, bufferisation Power Query M et tableaux structurés.",
    "questions": [
        {
            "scenario": "Dans un classeur de consolidation financière, vous devez rapatrier le prix unitaire d'un article selon deux critères simultanés : le Code Article ET le Code Magasin. Vous refusez d'ajouter une colonne concaténée artificielle.",
            "question": "Quelle formule matricielle moderne résout ce problème avec une vitesse d'exécution optimale ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "=RECHERCHEV(Article&Magasin, Plage, 3, FAUX)",
                "=RECHERCHEX(1, (Tableau[Article]=A2) * (Tableau[Magasin]=B2), Tableau[Prix], \"Non trouvé\")",
                "=INDEX(Tableau[Prix], SOMME(Tableau[Article]=A2))",
                "=EQUIV(A2, Tableau[Article], 0) + EQUIV(B2, Tableau[Magasin], 0)"
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "La syntaxe matricielle booléenne moderne de RECHERCHEX avec la valeur recherchée 1 : =RECHERCHEX(1, (Critere1)*(Critere2), ValeurRetournee) évalue les conditions en mémoire vectorielle sans altérer la structure de la table source. C'est le standard actuel qui remplace avantageusement les formules lourdes INDEX/EQUIV matricielles à validation Ctrl+Shift+Entrée."
        },
        {
            "scenario": "Dans Power Query (langage M), une étape de fusion (Table.NestedJoin) entre une table de 500 000 lignes et une table de référence ralentit considérablement le rafraîchissement car la table de référence est relue pour chaque ligne.",
            "question": "Quelle fonction du langage M permet de stocker la table de référence en mémoire vive pour accélérer la fusion ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Table.Optimize(TableReference)",
                "Table.Buffer(TableReference)",
                "Table.CacheMemory(TableReference)",
                "Table.FastLoad(TableReference)"
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "Table.Buffer charge l'intégralité d'une table en mémoire cache RAM lors de l'évaluation de la requête. Cela empêche le moteur Mashup (M) d'exécuter des lectures répétées ou des requêtes distantes pour chaque ligne de la table principale lors des fusions et jointures volumineuses."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["excel"] = themeDefinition;
    window.BenchTechQuizDatabase["excel"] = themeDefinition;
    if ("excel".includes('-')) {
        window.BenchTechQuizDatabase["excel".replace(/-/g, '_')] = themeDefinition;
    }
    if ("excel".includes('_')) {
        window.BenchTechQuizDatabase["excel".replace(/_/g, '-')] = themeDefinition;
    }
})();
