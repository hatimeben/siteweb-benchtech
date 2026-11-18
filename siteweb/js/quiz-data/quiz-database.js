/**
 * =====================================================================
 * BenchTech Academy - Moteur Central de Base de Données des Quiz
 * Marque officielle : BenchTech | « shaping tomorrow, today »
 * Tirage dynamique stratifié & anti-triche
 * =====================================================================
 */

window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    'use strict';

    const db = window.BenchTechQuizDatabase;

    /**
     * Récupère la liste de toutes les thématiques enregistrées
     */
    db.getAllThemeKeys = function() {
        const keys = Object.keys(db).filter(key => 
            typeof db[key] === 'object' && db[key] !== null && db[key].questions
        );
        return Array.from(new Set(keys.map(k => k.replace(/_/g, '-'))));
    };

    /**
     * Récupère une thématique avec normalisation de clé (- ou _)
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
     * Récupère l'intégralité du pool de toutes les questions (tous thèmes confondus)
     */
    db.getAllPoolQuestions = function() {
        if (window.BenchTechQuizPool && window.BenchTechQuizPool.themes) {
            const allQ = [];
            Object.values(window.BenchTechQuizPool.themes).forEach(t => {
                if (Array.isArray(t.questions)) {
                    allQ.push(...t.questions);
                }
            });
            if (allQ.length > 0) return allQ;
        }

        // Fallback sur les thèmes enregistrés dans db
        const allQ = [];
        db.getAllThemeKeys().forEach(k => {
            const t = db.getTheme(k);
            if (t && Array.isArray(t.questions)) {
                allQ.push(...t.questions);
            }
        });
        return allQ;
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
     * Clône une question et mélange ses réponses (A, B, C, D) de façon aléatoire
     * en recalculant fidèlement 'correct' et 'trapIndex'.
     */
    db.shuffleQuestionAnswers = function(q) {
        const cloned = JSON.parse(JSON.stringify(q));
        if (!Array.isArray(cloned.answers) || cloned.answers.length <= 1) {
            return cloned;
        }

        const originalCorrectText = cloned.answers[cloned.correct];
        const originalTrapText = (cloned.trapIndex !== undefined && cloned.answers[cloned.trapIndex]) 
            ? cloned.answers[cloned.trapIndex] 
            : null;

        cloned.answers = db.shuffleArray(cloned.answers);
        cloned.correct = cloned.answers.indexOf(originalCorrectText);
        if (originalTrapText !== null) {
            cloned.trapIndex = cloned.answers.indexOf(originalTrapText);
        }

        return cloned;
    };

    /**
     * Génère un jeu de questions pour une session de test.
     * TIRE AU SORT 10 QUESTIONS ÉQUILIBRÉES :
     * Stratification :
     *   - 2 Fondamentaux
     *   - 3 Opérationnel
     *   - 3 Avancé
     *   - 2 Expert
     *   Total = 10 questions
     */
    db.getSessionQuestions = function(themeKey, options = {}) {
        let pool = [];

        if (themeKey === 'all' || themeKey === 'general' || themeKey === 'grand-diagnostic') {
            pool = db.getAllPoolQuestions();
        } else {
            const theme = db.getTheme(themeKey);
            if (theme && Array.isArray(theme.questions)) {
                pool = [...theme.questions];
            }
        }

        if (pool.length === 0) return [];

        const limit = options.limit || 10;
        const doShuffleAnswers = options.shuffleAnswers !== false;

        let selected = [];

        if (options.stratified !== false && pool.length >= limit) {
            // Normalisation des difficultés
            const norm = (d) => {
                if (!d) return 'Opérationnel';
                const s = d.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                if (s.includes('fond') || s.includes('debutant') || s.includes('initial')) return 'Fondamentaux';
                if (s.includes('inter') || s.includes('oper')) return 'Opérationnel';
                if (s.includes('avan')) return 'Avancé';
                if (s.includes('expert')) return 'Expert';
                return 'Opérationnel';
            };

            const byDiff = {
                'Fondamentaux': db.shuffleArray(pool.filter(q => norm(q.difficulty) === 'Fondamentaux')),
                'Opérationnel': db.shuffleArray(pool.filter(q => norm(q.difficulty) === 'Opérationnel')),
                'Avancé': db.shuffleArray(pool.filter(q => norm(q.difficulty) === 'Avancé')),
                'Expert': db.shuffleArray(pool.filter(q => norm(q.difficulty) === 'Expert'))
            };

            // Quotas pour 10 questions équilibrées : 2 Fond, 3 Opér, 3 Avan, 2 Exp
            const targets = {
                'Fondamentaux': Math.min(2, byDiff['Fondamentaux'].length),
                'Opérationnel': Math.min(3, byDiff['Opérationnel'].length),
                'Avancé': Math.min(3, byDiff['Avancé'].length),
                'Expert': Math.min(2, byDiff['Expert'].length)
            };

            // Prélèvement par strate
            Object.keys(targets).forEach(diff => {
                const count = targets[diff];
                for (let i = 0; i < count; i++) {
                    if (byDiff[diff][i]) selected.push(byDiff[diff][i]);
                }
            });

            // Compléter si une strate contenait moins de questions que prévu
            if (selected.length < limit) {
                const remaining = pool.filter(q => !selected.includes(q));
                const shuffledRemaining = db.shuffleArray(remaining);
                while (selected.length < limit && shuffledRemaining.length > 0) {
                    selected.push(shuffledRemaining.pop());
                }
            }
        } else {
            // Tirage aléatoire direct si le pool est réduit
            selected = db.shuffleArray(pool).slice(0, limit);
        }

        // Mélanger l'ordre d'affichage des questions
        if (options.shuffle !== false) {
            selected = db.shuffleArray(selected);
        }

        // Mélanger les réponses (A, B, C, D) à chaque visiteur (anti-triche)
        if (doShuffleAnswers) {
            selected = selected.map(q => db.shuffleQuestionAnswers(q));
        }

        return selected;
    };

    window.QUIZ_DATA = db;
})();
