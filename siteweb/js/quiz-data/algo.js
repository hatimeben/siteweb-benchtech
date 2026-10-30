/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Algorithmique, Structures de Données & Complexité Asymptotique
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "algo",
    "title": "Algorithmique, Structures de Données & Complexité Asymptotique",
    "icon": "fa-code",
    "source": "Standards Académiques & ACM / IEEE Computer Science Curricula",
    "duration": "8-10 min",
    "studioTarget": "hybrid-studio",
    "recommendedCourse": "Formation Algorithmique & Résolution de Problèmes Informatiques",
    "formTopic": "Cursus Hybride Sur-Mesure",
    "description": "Évaluation sur la rigueur d'ingénierie logicielle : notation Grand O, compromis temps/espace, parcours de graphes et sélection de structures de données optimales.",
    "questions": [
        {
            "scenario": "Vous concevez un système de détection de doublons en quasi temps-réel recevant un flux continu de 10 000 transactions par seconde. La mémoire est limitée et vous tolérez un très faible taux de faux positifs (0.1%), mais aucun faux négatif.",
            "question": "Quelle structure de données probabiliste est le choix de référence pour cette contrainte stricte ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Un arbre binaire de recherche équilibré (Arbre AVL)",
                "Un filtre de Bloom (Bloom Filter)",
                "Une table de hachage conventionnelle avec chaînage séparé",
                "Une liste doublement chaînée avec recherche dichotomique"
            ],
            "correct": 1,
            "trapIndex": 2,
            "explanation": "Le filtre de Bloom est une structure probabiliste ultra-compacte basée sur un tableau de bits et k fonctions de hachage. Il garantit mathématiquement 0% de faux négatifs (si l'élément est absent, il répond 'absent' à 100%), tout en consommant jusqu'à 95% moins de mémoire qu'une table de hachage standard en production."
        },
        {
            "scenario": "Un algorithme de recherche parcourt un graphe orienté de dépendances logicielles pour détecter la présence éventuelle de cycles d'importation circulaires.",
            "question": "Quel algorithme canonique et quelle complexité temporelle s'appliquent ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Parcours en profondeur (DFS) avec coloration des sommets (Blanc, Gris, Noir) en complexité O(V + E)",
                "Algorithme de Dijkstra en complexité O(V^3)",
                "Tri à bulles récursif en complexité O(N log N)",
                "Recherche dichotomique en complexité O(log V)"
            ],
            "correct": 0,
            "trapIndex": 1,
            "explanation": "La détection de cycles dans un graphe orienté s'effectue via un parcours en profondeur (DFS) : la rencontre d'un arc retour (Back-edge) vers un sommet en cours de traitement (sommet Gris) prouve l'existence d'un cycle. La complexité est strictement linéaire en fonction du nombre de sommets V et d'arêtes E : O(V + E)."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["algo"] = themeDefinition;
    window.BenchTechQuizDatabase["algo"] = themeDefinition;
    if ("algo".includes('-')) {
        window.BenchTechQuizDatabase["algo".replace(/-/g, '_')] = themeDefinition;
    }
    if ("algo".includes('_')) {
        window.BenchTechQuizDatabase["algo".replace(/_/g, '-')] = themeDefinition;
    }
})();
