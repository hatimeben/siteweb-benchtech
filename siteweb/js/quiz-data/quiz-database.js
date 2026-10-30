/**
 * =====================================================================
 * BenchTech Academy - Moteur Central de Base de Données des Quiz
 * Marque officielle : BenchTech | « shaping tomorrow, today »
 * Architecture modulaire pour hébergement statique (Hostinger, MassiveHoster, etc.)
 * =====================================================================
 */

window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    'use strict';

    const db = window.BenchTechQuizDatabase;

    /**
     * Récupère la liste de toutes les thématiques enregistrées
     * @returns {string[]} Liste des identifiants uniques de thèmes
     */
    db.getAllThemeKeys = function() {
        const keys = Object.keys(db).filter(key => 
            typeof db[key] === 'object' && db[key] !== null && db[key].questions
        );
        return Array.from(new Set(keys.map(k => k.replace(/_/g, '-'))));
    };

    /**
     * Récupère une thématique avec normalisation de clé (- ou _)
     * @param {string} key Identifiant du thème (ex: 'powerbi', 'github-copilot')
     * @returns {Object|null} Définition du thème
     */
    db.getTheme = function(key) {
        if (!key) return null;
        if (db[key]) return db[key];
        const withHyphen = key.replace(/_/g, '-');
        if (db[withHyphen]) return db[withHyphen];
        const withUnderscore = key.replace(/-/g, '_');
        if (db[withUnderscore]) return db[withUnderscore];
        return null;
    };

    /**
     * Génère un jeu de questions pour une session de test
     * Supporte le tirage aléatoire pondéré si la banque comporte plus de questions que la limite.
     * 
     * @param {string} themeKey Identifiant du thème
     * @param {Object} options Options de tirage { limit, randomize, stratified }
     * @returns {Array} Liste des questions sélectionnées
     */
    db.getSessionQuestions = function(themeKey, options = {}) {
        const theme = db.getTheme(themeKey);
        if (!theme || !Array.isArray(theme.questions)) return [];

        const pool = [...theme.questions];
        const limit = options.limit || theme.maxQuestionsPerSession || pool.length;

        // Si le pool est inférieur ou égal à la limite, renvoyer le pool
        if (pool.length <= limit) {
            return options.shuffle ? db.shuffleArray(pool) : pool;
        }

        // Tirage stratifié par niveau de difficulté (Intermédiaire, Avancé, Expert)
        if (options.stratified !== false) {
            const byDiff = {
                'Intermédiaire': pool.filter(q => q.difficulty === 'Intermédiaire'),
                'Avancé': pool.filter(q => q.difficulty === 'Avancé'),
                'Expert': pool.filter(q => q.difficulty === 'Expert')
            };

            const selected = [];
            // Sélection équilibrée
            if (byDiff['Intermédiaire'].length > 0) {
                selected.push(db.randomChoice(byDiff['Intermédiaire']));
            }
            while (selected.length < limit && byDiff['Avancé'].length > 0) {
                const pick = db.randomChoice(byDiff['Avancé'], selected);
                if (pick) selected.push(pick); else break;
            }
            while (selected.length < limit && byDiff['Expert'].length > 0) {
                const pick = db.randomChoice(byDiff['Expert'], selected);
                if (pick) selected.push(pick); else break;
            }
            // Compléter si nécessaire
            while (selected.length < limit) {
                const remaining = pool.filter(q => !selected.includes(q));
                if (remaining.length === 0) break;
                selected.push(remaining[Math.floor(Math.random() * remaining.length)]);
            }
            return selected;
        }

        // Tirage aléatoire simple sans remise
        return db.shuffleArray(pool).slice(0, limit);
    };

    /**
     * Mélange un tableau (Algorithme de Fisher-Yates)
     */
    db.shuffleArray = function(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    };

    /**
     * Choix aléatoire dans un tableau excluant les éléments déjà choisis
     */
    db.randomChoice = function(pool, excludeList = []) {
        const available = pool.filter(item => !excludeList.includes(item));
        if (available.length === 0) return null;
        return available[Math.floor(Math.random() * available.length)];
    };

    /**
     * Ajoute dynamiquement une question à un thème
     * @param {string} themeKey 
     * @param {Object} questionObj 
     */
    db.addQuestion = function(themeKey, questionObj) {
        const theme = db.getTheme(themeKey);
        if (theme && Array.isArray(theme.questions)) {
            theme.questions.push(questionObj);
            return true;
        }
        return false;
    };

    // Rétrocompatibilité globale totale avec le code existant
    window.QUIZ_DATA = db;

})();

