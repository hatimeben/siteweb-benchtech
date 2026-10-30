/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Scrum, Agilité Opérationnelle & Product Ownership
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "scrum",
    "title": "Scrum, Agilité Opérationnelle & Product Ownership",
    "icon": "fa-sync-alt",
    "source": "Guide Scrum Officiel 2020 (Ken Schwaber & Jeff Sutherland)",
    "duration": "8-10 min",
    "studioTarget": "hybrid-studio",
    "recommendedCourse": "Formation Scrum Master & Product Owner : Pratiques Opérationnelles",
    "formTopic": "Formation Scrum & Agilité",
    "description": "Évaluation sans complaisance sur la réalité de l'agilité : gestion de la dette technique, respect de la Definition of Done (DoD), vélocité vs valeur et autonomie des équipes.",
    "questions": [
        {
            "scenario": "À deux jours de la fin du Sprint, l'équipe réalise qu'un élément du Product Backlog ne pourra pas respecter l'intégralité des critères de la Définition de Fini (Definition of Done - DoD). Le Product Owner propose de le livrer quand même et de corriger au Sprint suivant.",
            "question": "Que prescrit rigoureusement le Guide Scrum 2020 dans cette situation ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Valider l'élément à 80% et compter 80% des Story Points dans la vélocité du Sprint.",
                "Si un élément ne respecte pas la Definition of Done, il ne peut être ni présenté en Sprint Review, ni mis en production ; il retourne dans le Product Backlog pour réestimation et priorisation.",
                "Rallonger la durée du Sprint de 3 jours pour terminer les tests.",
                "Supprimer temporairement les critères non respectés de la DoD pour clore le ticket."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "Le Guide Scrum est formel : un incrément n'existe que s'il est 'Fini' selon la DoD. Livrer du 'presque fini' est la cause première de l'explosion de la dette technique. L'élément non fini retourne dans le Backlog, aucun point de vélocité partiel n'est accordé, et le problème est analysé lors de la Rétrospective."
        },
        {
            "scenario": "Durant la planification du Sprint (Sprint Planning), le management intervient pour imposer une charge de 45 Story Points à l'équipe alors que sa vélocité historique stable est de 30 points.",
            "question": "Quelle est la posture réglementaire et protectrice du Scrum Master ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Demander à l'équipe de faire des heures supplémentaires non planifiées.",
                "Rappeler que les Développeurs sont les seuls habilités à sélectionner la quantité de travail qu'ils estiment pouvoir accomplir dans le Sprint, conformément au principe d'auto-gestion et d'empirisme.",
                "Diviser la taille de chaque User Story par deux pour faire correspondre le chiffre.",
                "Annuler immédiatement le Sprint et convoquer un audit externe."
            ],
            "correct": 1,
            "trapIndex": 2,
            "explanation": "Scrum repose sur des équipes auto-gérées. Le Product Owner priorise le QUOI (la valeur), mais les Développeurs décident souverainement du COMBIEN (leur capacité réelle d'engagement). Le Scrum Master doit protéger cette autonomie pour éviter la dégradation de la qualité et l'épuisement de l'équipe."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["scrum"] = themeDefinition;
    window.BenchTechQuizDatabase["scrum"] = themeDefinition;
    if ("scrum".includes('-')) {
        window.BenchTechQuizDatabase["scrum".replace(/-/g, '_')] = themeDefinition;
    }
    if ("scrum".includes('_')) {
        window.BenchTechQuizDatabase["scrum".replace(/_/g, '-')] = themeDefinition;
    }
})();
