/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Microsoft Power BI, Architecture VertiPaq & Maîtrise DAX
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "powerbi",
    "title": "Microsoft Power BI, Architecture VertiPaq & Maîtrise DAX",
    "icon": "fa-chart-pie",
    "source": "Référentiel Microsoft PL-300 & Méthodologie SQLBI",
    "duration": "10-12 min",
    "studioTarget": "powerbi-studio",
    "recommendedCourse": "Formation Power BI Sur-Mesure : Modélisation en Étoile & DAX Avancé",
    "formTopic": "Formation Power BI Sur-Mesure",
    "description": "Évaluation avancée orientée production : context transition, moteurs Formule vs Stockage (VertiPaq), tables déconnectées, RLS dynamique et Time Intelligence sous haute volumétrie.",
    "questions": [
        {
            "scenario": "Lors d'un audit sur un jeu de données de 20M de lignes, la mesure SUMX(Ventes, Ventes[Quantite] * [PrixUnitaireMesure]) entraîne une saturation mémoire et un temps de rendu de 14 secondes dans un visuel matriciel.",
            "question": "Quelle est l'origine précise du goulet d'étranglement et la correction à appliquer ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Les colonnes de la table de faits manquent d'index B-Tree dans le modèle tabulaire Power BI.",
                "L'appel d'une mesure ([PrixUnitaireMesure]) dans un itérateur déclenche une transition de contexte (CALCULATE implicite) pour chaque ligne, forçant le Formule Engine mono-thread à évaluer 20M de contextes de filtre.",
                "L'itérateur SUMX est par nature mono-colonne et refuse les multiplications entre champs de granularités différentes.",
                "La fonction SUMX doit être remplacée par un ALLSELECTED pour empêcher la propagation des filtres croisés."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "En DAX, appeler une mesure à l'intérieur d'un itérateur comme SUMX injecte un CALCULATE implicite, provoquant une transition de contexte ligne-à-filtre à chaque itération. Sur 20 millions de lignes, le Storage Engine VertiPaq ne peut pas vectoriser le calcul et renvoie 20 millions d'appels au Formule Engine mono-thread. La solution consiste à utiliser la colonne native 'Ventes[PrixUnitaire]' directement sans transition ou à pré-agréger la table."
        },
        {
            "scenario": "Vous concevez un rapport de marge commerciale avec un modèle en étoile. Vous devez calculer le chiffre d'affaires cumulé annuel (YTD) mais l'entreprise clôture son exercice fiscal le 30 juin de chaque année.",
            "question": "Quelle syntaxe DAX respecte scrupuleusement la performance VertiPaq et la table Calendrier standard ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "CALCULATE([CA], FILTER(Calendrier, Calendrier[Date] <= MAX(Calendrier[Date]) && Calendrier[AnneeFiscale] = SELECTEDVALUE(Calendrier[AnneeFiscale])))",
                "TOTALYTD([CA], Calendrier[Date], '06-30')",
                "CALCULATE([CA], DATESYTD(Calendrier[Date], '30/06'))",
                "SUMX(FILTER(Calendrier, Calendrier[Mois] <= 6), [CA])"
            ],
            "correct": 1,
            "trapIndex": 2,
            "explanation": "La fonction native TOTALYTD accepte un troisième argument optionnel spécifiant la date de clôture fiscale au format 'MM-DD' (ex: '06-30'). DATESYTD attend le format 'MM-DD' et non 'DD/MM', et la syntaxe avec FILTER manuel détruit le cache de requêtes VertiPaq en forçant une itération ligne à ligne."
        },
        {
            "scenario": "Un modèle décisionnel contient deux tables de faits à granularités hétérogènes : Ventes (au jour/produit/client) et Objectifs (au mois/famille de produit). Un développeur propose une relation bidirectionnelle directe (*:*).",
            "question": "Pourquoi cette approche est-elle proscrite en architecture Ralph Kimball et quelle est l'alternative certifiée ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "Elle crée des ambiguïtés de propagation de filtre, des résultats imprévisibles et des dégradations de performance majeures ; la solution consiste à relier chaque fait à des dimensions conformes partagées (Temps, Produit) à la granularité commune.",
                "Power BI interdit strictement toute relation plusieurs-à-plusieurs sans clé primaire synthétique composite.",
                "La bidirectionnalité désactive le moteur VertiPaq et force un basculement complet en mode DirectQuery.",
                "Il faut fusionner les deux tables de faits dans Power Query avec un Merge plein (Full Outer Join)."
            ],
            "correct": 0,
            "trapIndex": 3,
            "explanation": "Les relations plusieurs-à-plusieurs bidirectionnelles directes entre faits violent les fondements du Star Schema. Elles introduisent des cycles de filtrage vicieux et empêchent le moteur de garantir l'intégrité référentielle. Le standard d'architecture consiste à modéliser des dimensions partagées conformées (Conformed Dimensions) à la granularité la plus haute ou à utiliser des tables de pont (Bridge Tables) rigoureuses."
        },
        {
            "scenario": "Vous devez restreindre l'accès aux données régionales via la Sécurité au Niveau des Lignes (RLS). La table 'Utilisateurs' contient l'adresse e-mail et le code région. La table 'Ventes' est filtrée dynamiquement.",
            "question": "Quelle expression de filtre de rôle DAX assure une sécurité sans faille en production dans Power BI Service ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Ventes[Region] = LOOKUPVALUE(Utilisateurs[Region], Utilisateurs[Email], USERNAME())",
                "Utilisateurs[Email] = USERPRINCIPALNAME() sur la table Utilisateurs, avec une relation 1:* unidirectionnelle active vers la table Ventes sur le code Région",
                "CALCULATE(COUNTROWS(Ventes), Ventes[EmailCommercial] = USERNAME()) > 0",
                "FILTER(Ventes, Ventes[Region] = USERPRINCIPALNAME())"
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "Dans le Service Power BI Cloud, USERPRINCIPALNAME() retourne systématiquement l'adresse UPN de l'utilisateur connecté (alors que USERNAME() retourne souvent le format Domaine\\User en local). En filtrant la dimension Utilisateurs via Utilisateurs[Email] = USERPRINCIPALNAME(), le filtre se propage naturellement vers la table de faits via la relation relationnelle 1:* sans nécessiter d'appels répétés coûteux à LOOKUPVALUE."
        },
        {
            "scenario": "Dans DAX Studio, la métrique 'SE CPU / FE CPU' d'une mesure indique un ratio de 95% FE (Formule Engine) et 5% SE (Storage Engine), avec une exécution globale jugée inacceptable.",
            "question": "Comment interpréter ce diagnostic d'ingénierie et quel levier actionner ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Le moteur VertiPaq est sous-dimensionné ; il faut augmenter la RAM du serveur hébergeant le Power BI Gateway.",
                "Le Formule Engine est saturé car la mesure empêche la vectorisation VertiPaq (présence de fonctions non vectorisables, conversions de types à la volée ou conditions imbriquées dans des itérateurs) ; il faut simplifier les prédicats pour déléguer les calculs au Storage Engine multi-thread.",
                "Le Storage Engine est trop rapide pour le Formule Engine ; il faut forcer le mode DirectQuery.",
                "La mesure est mise en cache et ne nécessite aucune intervention."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "Le Storage Engine (SE / VertiPaq) est massivement parallélisé et optimisé pour le scanning rapide de colonnes compressées. Le Formule Engine (FE) est mono-thread et gère la logique complexe. Un score de 95% FE prouve que le code DAX force le moteur à sortir du mode vectorisé pour évaluer des calculs ligne par ligne en CPU mono-cœur. Réécrire les prédicats pour que VertiPaq gère les filtres résout le problème."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["powerbi"] = themeDefinition;
    window.BenchTechQuizDatabase["powerbi"] = themeDefinition;
    if ("powerbi".includes('-')) {
        window.BenchTechQuizDatabase["powerbi".replace(/-/g, '_')] = themeDefinition;
    }
    if ("powerbi".includes('_')) {
        window.BenchTechQuizDatabase["powerbi".replace(/_/g, '-')] = themeDefinition;
    }
})();
