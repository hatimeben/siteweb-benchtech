/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Systèmes Multi-Agents, Protocole MCP & Orchestration SDK
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "copilot-sdk",
    "title": "Systèmes Multi-Agents, Protocole MCP & Orchestration SDK",
    "icon": "fa-network-wired",
    "source": "Standards Model Context Protocol (Anthropic/OpenAI) & Semantic Kernel / Autogen",
    "duration": "10-12 min",
    "studioTarget": "copilot-studio",
    "recommendedCourse": "Formation Multi-Agents & Copilot SDK Sur-Mesure : Architecture & MCP",
    "formTopic": "Formation Copilotes IA Sur-Mesure",
    "description": "Évaluation pour architectes logiciels : boucle ReAct, protocole universel MCP (Model Context Protocol), routage inter-agents, gestion de la dérive de tokens et état partagé.",
    "questions": [
        {
            "scenario": "Dans une architecture multi-agents ReAct (Reasoning + Acting), un agent coordinateur délègue des sous-tâches à un agent SQL et un agent RAG. Après 5 allers-retours, la latence explose et les agents perdent le fil de l'objectif initial.",
            "question": "Quel phénomène d'ingénierie LLM se produit et quel pattern architectural permet de le juguler ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Une surcharge réseau HTTP ; il faut passer sur des webhooks UDP.",
                "La dérive de contexte (Context Drift / Token Bloat) liée à l'accumulation non purgée de l'historique brut de Tool Calls ; la solution consiste à implémenter un pattern d'état compacté (State Summarization / Scratchpad Pruning) où seul l'artefact consolidé est transmis au coordinateur.",
                "Le modèle de fondation a expiré ; il faut le recompiler.",
                "Les agents ReAct ne supportent pas plus de deux outils simultanément."
            ],
            "correct": 1,
            "trapIndex": 3,
            "explanation": "Dans les boucles ReAct, chaque appel d'outil (Thought, Action, Observation) rajoute des milliers de tokens dans le prompt. Le bruit statistique finit par noyer les consignes initiales (Needle in a Haystack problem) et ralentir le traitement. L'architecture multi-agents robuste impose des agents étanches qui renvoient des résumés structurés (JSON Schema strict) au chef d'orchestre, sans partager l'intégralité de leur journal d'exécution interne."
        },
        {
            "scenario": "Vous concevez un serveur MCP (Model Context Protocol) pour connecter des agents IA aux bases de données et outils internes de l'entreprise.",
            "question": "Quelle est la valeur architecturale clé du protocole universel MCP par rapport aux API REST custom ad-hoc ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "MCP standardise la découverte de ressources (Resources), d'outils (Tools) et de gabarits d'instructions (Prompts) via un protocole client/serveur JSON-RPC unifié, permettant à n'importe quel LLM compatible d'interopérer sans connecteur propriétaire.",
                "MCP remplace le protocole TCP/IP par une liaison satellite chiffrée.",
                "MCP permet d'exécuter des LLM de 70B de paramètres directement sur un microcontrôleur Arduino.",
                "MCP supprime le besoin de serveurs back-end dans les systèmes d'information."
            ],
            "correct": 0,
            "trapIndex": 3,
            "explanation": "Le Model Context Protocol (MCP) standardise la façon dont les modèles de langage découvrent et consomment le contexte externe (fichiers, outils de calcul, bases SQL, requêtes web). Au lieu de réécrire un adaptateur sur-mesure pour chaque écosystème (OpenAI Function Calling, LangChain, Semantic Kernel, Copilot Studio), un serveur MCP unique expose ses capacités de façon normalisée à tous les clients."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["copilot-sdk"] = themeDefinition;
    window.BenchTechQuizDatabase["copilot_sdk"] = themeDefinition;
    if ("copilot-sdk".includes('-')) {
        window.BenchTechQuizDatabase["copilot-sdk".replace(/-/g, '_')] = themeDefinition;
    }
    if ("copilot-sdk".includes('_')) {
        window.BenchTechQuizDatabase["copilot-sdk".replace(/_/g, '-')] = themeDefinition;
    }
})();
