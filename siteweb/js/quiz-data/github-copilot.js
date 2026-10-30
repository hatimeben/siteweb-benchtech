/**
 * BenchTech Academy - Banque de Questions
 * Thématique : GitHub Copilot, Ingénierie Logicielle & Pair Programming IA
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "github-copilot",
    "title": "GitHub Copilot, Ingénierie Logicielle & Pair Programming IA",
    "icon": "fab fa-github",
    "source": "Standards GitHub Enterprise & Clean Code Architecture",
    "duration": "8-10 min",
    "studioTarget": "copilot-studio",
    "recommendedCourse": "Formation GitHub Copilot Sur-Mesure : Productivité & Bonnes Pratiques",
    "formTopic": "Formation Copilotes IA Sur-Mesure",
    "description": "Évaluation sur l'intégration professionnelle de GitHub Copilot en équipe de développement : custom instructions, contexte d'ancrage, refactoring sécurisé et tests unitaires.",
    "questions": [
        {
            "scenario": "Vous travaillez sur une architecture microservices en TypeScript. GitHub Copilot génère régulièrement du code obsolète utilisant d'anciennes bibliothèques dépréciées par la gouvernance de l'équipe.",
            "question": "Quelle méthode certifiée permet d'aligner automatiquement toutes les suggestions de Copilot sur les standards d'architecture du projet ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Désactiver Copilot pour tous les développeurs de l'équipe.",
                "Créer et versionner un fichier de configuration '.github/copilot-instructions.md' à la racine du dépôt pour définir les bibliothèques proscrites, les design patterns exigés et les règles de nommage strictes.",
                "Écrire un commentaire de 500 lignes au début de chaque fichier source.",
                "Réinstaller l'extension VS Code chaque matin."
            ],
            "correct": 1,
            "trapIndex": 2,
            "explanation": "GitHub Copilot prend en charge les Custom Instructions de dépôt via le fichier '.github/copilot-instructions.md'. Ce fichier est automatiquement chargé dans le contexte de chaque requête Chat et Inline, forçant le modèle à respecter les frameworks, règles architecturales et conventions de l'entreprise sans pollution manuelle de code."
        },
        {
            "scenario": "Un développeur demande à Copilot Chat : '@workspace Comment fonctionne l'authentification dans notre projet ?'. La réponse est superficielle et mentionne un module inexistant.",
            "question": "Quelle est la cause principale de ce manque de pertinence et la bonne pratique pour y remédier ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Le dépôt manque d'indexation locale et le développeur n'a pas ciblé les fichiers clés avec les balises de contexte (#file, #codebase) ou laissé les fichiers critiques ouverts dans l'IDE pour alimenter la fenêtre d'attention (Prompt Context).",
                "Copilot ne sait pas lire le code écrit en dehors de Python.",
                "L'agent workspace nécessite impérativement un abonnement Azure Quantum.",
                "Il faut commit et push les modifications avant chaque question."
            ],
            "correct": 0,
            "trapIndex": 3,
            "explanation": "L'agent @workspace s'appuie sur la fenêtre de contexte de l'IDE. L'algorithme de complétion de contexte priorise les onglets actifs ouverts, les fichiers récemment consultés et les références explicites via des symboles d'ancrage (#file:auth.ts, #sym:loginHandler). Poser une question sans contexte explicite conduit à des réponses généralistes."
        },
        {
            "scenario": "Vous demandez à GitHub Copilot de générer une suite de tests unitaires pour une fonction critique de calcul de taxes financières.",
            "question": "Quel risque de biais d'automatisation devez-vous impérativement surveiller en tant que Lead Tech ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Copilot refuse systématiquement de générer des assertions dans les frameworks Jest ou Mocha.",
                "Le modèle tend à tester l'implémentation existante (y compris ses bugs ou cas limites non gérés) plutôt que la spécification métier stricte, risquant de valider des comportements erronés.",
                "Copilot consomme la totalité des jetons de l'organisation lors de l'exécution des tests.",
                "Les tests générés par IA ne peuvent pas être exécutés dans un pipeline CI/CD GitHub Actions."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "C'est le piège d'automatisation majeur de l'IA en QA : si la fonction contient un bug sur les bornes (off-by-one ou division par zéro), Copilot lira le code et générera des assertions qui confirment ce bug car il modélise le code sous ses yeux. La bonne pratique impose de fournir la spécification métier (ou table de vérité) dans le prompt avant de lui laisser générer les cas limites."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["github-copilot"] = themeDefinition;
    window.BenchTechQuizDatabase["github_copilot"] = themeDefinition;
    if ("github-copilot".includes('-')) {
        window.BenchTechQuizDatabase["github-copilot".replace(/-/g, '_')] = themeDefinition;
    }
    if ("github-copilot".includes('_')) {
        window.BenchTechQuizDatabase["github-copilot".replace(/_/g, '-')] = themeDefinition;
    }
})();
