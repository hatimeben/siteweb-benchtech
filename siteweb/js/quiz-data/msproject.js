/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Microsoft Project, Ordonnancement & Chemin Critique
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "msproject",
    "title": "Microsoft Project, Ordonnancement & Chemin Critique",
    "icon": "fa-tasks",
    "source": "Standards PMI (Project Management Institute) & Pratiques MS Project",
    "duration": "8-10 min",
    "studioTarget": "hybrid-studio",
    "recommendedCourse": "Formation MS Project : Gestion de Projets Complexes & Dérives",
    "formTopic": "Formation MS Project",
    "description": "Évaluation sur l'ingénierie de planification : marge libre vs marge totale, contraintes fortes vs flexibles, nivellement des ressources et gestion de la ligne de base.",
    "questions": [
        {
            "scenario": "Dans MS Project, un planificateur applique systématiquement des contraintes de date rigides de type 'Doit commencer le' (Must Start On) sur la majorité des tâches de son projet de 600 lignes.",
            "question": "Quelle conséquence dommageable majeure cette pratique engendre-t-elle sur le planning dynamique ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Elle empêche le logiciel d'enregistrer le fichier au format .mpp.",
                "Elle détruit le calcul automatique du chemin critique et l'ordonnancement dynamique : les décalages de tâches antérieures ne propagent plus leurs impacts sur les jalons aval, masquant les dérives réelles du projet.",
                "Elle augmente automatiquement le coût salarial des ressources assignées.",
                "Elle désactive l'affichage du diagramme de Gantt."
            ],
            "correct": 1,
            "trapIndex": 3,
            "explanation": "Dans MS Project, les tâches doivent être liées par des relations logiques (FD, DD...) et pilotées par la contrainte flexible par défaut 'Dès que possible' (As Soon As Possible). Fixer des dates rigides casse le moteur de calcul CPM (Critical Path Method). Si un prédécesseur prend du retard, les tâches dépendantes restent artificiellement figées, donnant une fausse illusion de conformité."
        },
        {
            "scenario": "Une tâche B possède une 'Marge Totale' de 5 jours et une 'Marge Libre' de 0 jour.",
            "question": "Comment interpréter rigoureusement cet état lors du comité de pilotage ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "La tâche B peut être retardée de 5 jours sans retarder la date de fin globale du projet, mais tout retard immédiat décalera le début de ses tâches successeurs directes.",
                "La tâche B est obligatoirement sur le chemin critique du projet.",
                "La tâche B ne peut subir aucun retard sans retarder immédiatement le projet entier.",
                "La tâche B a été supprimée par le nivellement des ressources."
            ],
            "correct": 0,
            "trapIndex": 2,
            "explanation": "La Marge Totale (Total Float) mesure le retard admissible avant d'impacter la date finale du projet. La Marge Libre (Free Float) mesure le retard admissible sans impacter le démarrage au plus tôt de la tâche suivante directe. Avoir Marge Totale = 5j et Marge Libre = 0j signifie que retarder la tâche décale le successeur, mais sans compromettre l'échéance finale globale du projet."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["msproject"] = themeDefinition;
    window.BenchTechQuizDatabase["msproject"] = themeDefinition;
    if ("msproject".includes('-')) {
        window.BenchTechQuizDatabase["msproject".replace(/-/g, '_')] = themeDefinition;
    }
    if ("msproject".includes('_')) {
        window.BenchTechQuizDatabase["msproject".replace(/_/g, '-')] = themeDefinition;
    }
})();
