/**
 * BenchTech Academy - Banque de Questions Dynamique
 * Thématique : Microsoft Power BI & Data Analytics
 * Généré automatiquement depuis benchtech_formations.db (Pool de 40 questions)
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
        "id": "powerbi",
        "title": "Microsoft Power BI & Data Analytics",
        "icon": "fa-chart-pie",
        "source": "Microsoft Learn PL-300, The Definitive Guide to DAX (Russo & Ferrari)",
        "duration": "10-12 min",
        "studioTarget": "powerbi-studio",
        "recommendedCourse": "Formation Power BI Sur-Mesure : DAX & Modélisation",
        "formTopic": "Formation Power BI Sur-Mesure",
        "maxQuestionsPerSession": 10,
        "description": "Évaluation de haut niveau calibrée par BenchTech avec scénarios d'entreprise réels et diagnostics opérationnels.",
        "questions": [
        {
                "id": 11,
                "scenario": "Dans un fichier de reporting commercial, les données mensuelles arrivent sous forme de 12 colonnes 'Janvier', 'Février', ..., 'Décembre'.",
                "question": "Quelle opération incontournable de Power Query devez-vous appliquer pour rendre ce jeu de données conforme à la modélisation relationnelle ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                        "Dépivoter les colonnes (Unpivot Columns) pour obtenir une ligne par mois et montant.",
                        "Transposer l'ensemble de la table pour inverser lignes et colonnes.",
                        "Fusionner les 12 colonnes en une seule chaîne de texte séparée par des virgules.",
                        "Créer 12 colonnes calculées en DAX avec des fonctions IF conditionnelles."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "L'opération 'Dépivoter les colonnes' (Unpivot Columns) transforme une structure matricielle 'large' en structure relationnelle 'longue' (une colonne 'Mois' et une colonne 'Valeur'), indispensable pour créer des mesures et filtres DAX performants.",
                "linkedBlockCode": "PBI-ETL-01",
                "linkedBlockTitle": "Ingestion Multi-Sources & Préparation Power Query",
                "themeCode": "powerbi"
        },
        {
                "id": 12,
                "scenario": "Dans un modèle Power BI, vous devez relier la table 'Clients' (1 million de lignes) à la table 'Ventes' (15 millions de lignes) sur la clé 'Client_ID'.",
                "question": "Quelle est la cardinalité recommandée et le sens de filtrage optimal selon les standards de modélisation en étoile (Kimball) ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                        "Cardinalité 1 à Plusieurs (1:*), filtrage à sens unique (De Clients vers Ventes).",
                        "Cardinalité Plusieurs à Plusieurs (*:*) avec filtrage bidirectionnel activé.",
                        "Cardinalité 1 à 1 (1:1) avec désactivation de la relation.",
                        "Aucune relation physique : tout filtrer via des fonctions LOOKUPVALUE en DAX."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Dans un Star Schema optimal, les relations entre dimension et fait sont de type 1 à Plusieurs (1:*), avec un sens de filtrage unidirectionnel (de la dimension Clients vers la table de faits Ventes).",
                "linkedBlockCode": "PBI-MOD-02",
                "linkedBlockTitle": "Modélisation Dimensionnelle en Étoile (Star Schema)",
                "themeCode": "powerbi"
        },
        {
                "id": 13,
                "scenario": "Un débutant crée une colonne calculée '[CA_Ligne] = Ventes[Quantite] * Ventes[Prix_Unitaire]' pour une table de 10 millions de lignes. Le fichier .pbix prend 400 Mo.",
                "question": "Quelle est la bonne pratique d'architecture DAX pour obtenir ce calcul sans gonfler la mémoire RAM du modèle ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "Créer une mesure explicite avec un itérateur : CA = SUMX(Ventes, Ventes[Quantite] * Ventes[Prix_Unitaire]).",
                        "Conserver la colonne calculée mais changer son format d'affichage en monétaire.",
                        "Créer une mesure utilisant la formule simple CA = SUM(Ventes[Quantite]) * SUM(Ventes[Prix_Unitaire]).",
                        "Dupliquer la table dans Power Query avant d'appliquer le calcul."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Créer une mesure explicite itérative 'CA = SUMX(Ventes, Ventes[Quantite] * Ventes[Prix_Unitaire])'. Les colonnes calculées sont stockées physiquement en mémoire RAM et compressées par VertiPaq, alors que les mesures sont évaluées à la volée selon le contexte de filtre.",
                "linkedBlockCode": "PBI-DAX-03",
                "linkedBlockTitle": "Fondations DAX & Transition de Contexte (CALCULATE)",
                "themeCode": "powerbi"
        },
        {
                "id": 14,
                "scenario": "Vous utilisez la fonction DAX 'SAMEPERIODLASTYEAR(Calendrier[Date])', mais les résultats retournent des valeurs vides ou totalement fausses.",
                "question": "Quel prérequis technique fondamental sur la table Calendrier n'a très probablement pas été respecté ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "La table Calendrier n'est pas continue (jours manquants) ou n'a pas été marquée comme 'Table de dates'.",
                        "La colonne Date doit obligatoirement être au format texte 'JJ/MM/AAAA'.",
                        "La fonction SAMEPERIODLASTYEAR ne fonctionne que sur les années bissextiles.",
                        "Il faut désactiver le moteur VertiPaq dans les options Power BI Desktop."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Toutes les fonctions DAX de Time Intelligence exigent une table de dates continue (sans aucun trou de date) marquée comme 'Table de dates' (Mark as Date Table), couvrant l'ensemble des années concernées et reliée aux faits par une relation 1:*.",
                "linkedBlockCode": "PBI-TIM-04",
                "linkedBlockTitle": "DAX Temporel (Time Intelligence) & Analyses Comparatives",
                "themeCode": "powerbi"
        },
        {
                "id": 15,
                "scenario": "Vous souhaitez calculer le pourcentage du chiffre d'affaires d'une catégorie par rapport au total général de toutes les catégories.",
                "question": "Quelle combinaison de fonctions DAX permet d'ignorer le filtre de catégorie pour obtenir le dénominateur global ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "CALCULATE([CA Total], ALL(Produits[Categorie])) (ou REMOVEFILTERS).",
                        "SUM([CA Total]) / COUNT(Produits[Categorie]).",
                        "CALCULATE([CA Total], KEEPFILTERS(Produits[Categorie])).",
                        "TOTALYTD([CA Total], Calendrier[Date])."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "CALCULATE([CA Total], ALL(Produits[Categorie])) ou REMOVEFILTERS(Produits[Categorie]) supprime le filtre actif sur la colonne Categorie au sein du contexte d'évaluation pour restituer la somme globale.",
                "linkedBlockCode": "PBI-DAX-03",
                "linkedBlockTitle": "Fondations DAX & Transition de Contexte (CALCULATE)",
                "themeCode": "powerbi"
        },
        {
                "id": 16,
                "scenario": "À l'intérieur d'une fonction itérative 'AVERAGEX(Clients, [Montant Total])', vous remarquez que la mesure [Montant Total] recalcule la valeur pour chaque client individuel, même sans fonction CALCULATE explicite dans la formule.",
                "question": "Quel concept fondamental interne au langage DAX s'est produit automatiquement lors de l'appel de la mesure ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "La transition de contexte automatique provoquée par l'encapsulation implicite de la mesure dans un CALCULATE.",
                        "Une dénormalisation temporaire exécutée par le moteur Power Query en tâche de fond.",
                        "L'application d'un verrou exclusif sur la table de faits.",
                        "Une anomalie de filtrage bidirectionnel nécessitant un redémarrage de Power BI."
                ],
                "correct": 0,
                "trapIndex": 3,
                "explanation": "Toute référence à une mesure existante à l'intérieur d'un itérateur (comme AVERAGEX ou FILTER) est automatiquement encapsulée dans un CALCULATE invisible, ce qui déclenche la 'Transition de Contexte' (Context Transition) transformant le contexte de ligne courant en contexte de filtre.",
                "linkedBlockCode": "PBI-DAX-03",
                "linkedBlockTitle": "Fondations DAX & Transition de Contexte (CALCULATE)",
                "themeCode": "powerbi"
        },
        {
                "id": 17,
                "scenario": "Vous analysez un modèle de 3 Go avec DAX Studio (VertiPaq Analyzer). Vous découvrez qu'une seule colonne 'DateHeure_Transaction' (avec heure, minute, seconde) consomme 75% de la mémoire totale du modèle.",
                "question": "Quelle est l'explication architecturale liée à la compression VertiPaq et quelle est l'optimisation immédiate ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "La très forte cardinalité de la colonne détruit la compression du dictionnaire ; il faut scinder la colonne en 'Date' et 'Heure' séparées.",
                        "La colonne doit être encodée en format Base64 pour être compressée.",
                        "Il faut désactiver les relations inactives avec USERELATIONSHIP.",
                        "Il faut forcer le mode DirectQuery pour éliminer le stockage en RAM."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Le moteur colonnaire VertiPaq compresse les données par dictionnaire de valeurs distinctes (cardinalité). Une colonne Horodatage à la seconde possède une cardinalité gigantesque, détruisant la compression. Séparer cette colonne en deux (une colonne Date + une colonne Heure arrondie ou par tranche) divise l'empreinte mémoire par 10 ou 20.",
                "linkedBlockCode": "PBI-OPT-05",
                "linkedBlockTitle": "Optimisation Moteur VertiPaq & Réduction Mémoire",
                "themeCode": "powerbi"
        },
        {
                "id": 18,
                "scenario": "Votre direction générale exige que chaque directeur régional ne visualise dans les tableaux de bord que les données de sa propre région, avec un seul et même rapport publié sur Power BI Service.",
                "question": "Quelle fonctionnalité de gouvernance Power BI répond rigoureusement à cette exigence de cloisonnement des données ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "La sécurité au niveau des lignes dynamique (RLS) avec la fonction USERPRINCIPALNAME().",
                        "Créer autant de fichiers .pbix séparés qu'il y a de directeurs régionaux.",
                        "Masquer les pages du rapport avec des signets (Bookmarks) verrouillés par mot de passe.",
                        "Appliquer un filtre visuel dans le volet filtre de Power BI Desktop."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "La sécurité au niveau des lignes (RLS - Row-Level Security) dynamique combinée à la fonction DAX USERPRINCIPALNAME() filtre automatiquement les données retournées selon l'identité Azure AD / Entra ID de l'utilisateur connecté sans multiplier les rapports.",
                "linkedBlockCode": "PBI-GOV-06",
                "linkedBlockTitle": "Sécurité à la Ligne (RLS) & Déploiement Power BI Service",
                "themeCode": "powerbi"
        },
        {
                "id": 19,
                "scenario": "Dans un rapport financier très sollicité, une mesure DAX contenant plusieurs sous-requêtes CALCULATE imbriquées génère des ralentissements majeurs de rendu (plus de 8 secondes d'attente pour afficher un visuel matriciel).",
                "question": "Quelle technique de refactorisation DAX experte permet d'éliminer les recalculs redondants de contextes identiques ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                        "Stocker les résultats intermédiaires dans des variables DAX (VAR / RETURN) pour figer leur évaluation.",
                        "Remplacer toutes les mesures par des colonnes calculées dans la table de faits.",
                        "Activer le filtrage bidirectionnel sur toutes les tables de dimensions.",
                        "Encapsuler chaque étape dans un bloc try/catch en M dans Power Query."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "L'utilisation de variables DAX 'VAR ... RETURN' stocke le résultat d'une expression évaluée une seule fois dans son contexte de définition, évitant au moteur Formula Engine (FE) de recalculer plusieurs fois la même mesure dans la boucle d'évaluation.",
                "linkedBlockCode": "PBI-OPT-05",
                "linkedBlockTitle": "Optimisation Moteur VertiPaq & Réduction Mémoire",
                "themeCode": "powerbi"
        },
        {
                "id": 20,
                "scenario": "Lors d'un audit de performance dans DAX Studio, vous analysez les métriques 'Storage Engine (SE) CPU' vs 'Formula Engine (FE) CPU'. Le FE CPU représente 92% du temps d'exécution total de la requête DAX.",
                "question": "Quelle est la signification architecturale de cette métrique et que devez-vous optimiser en priorité ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                        "Le Formula Engine (monothreadé) est saturé par une logique DAX trop complexe ; il faut réécrire la mesure pour déléguer le travail au Storage Engine (VertiPaq multithreadé).",
                        "La mémoire vive du serveur est défaillante ; il faut redémarrer la passerelle de données (Gateway).",
                        "Le réseau entre le client et Power BI Service a un temps de latence trop élevé.",
                        "Il faut convertir le modèle en DirectQuery pour soulager le Formula Engine."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Le Storage Engine (VertiPaq) est massivement multithreadé et ultra-rapide en RAM, tandis que le Formula Engine est monothreadé. Un FE à 92% signifie que la mesure force le moteur à exécuter du code procédural complexe ligne par ligne (ex: fonctions non supportées par SE, transitions de contextes excessives). Il faut simplifier le DAX pour déléguer les agrégations au Storage Engine.",
                "linkedBlockCode": "PBI-OPT-05",
                "linkedBlockTitle": "Optimisation Moteur VertiPaq & Réduction Mémoire",
                "themeCode": "powerbi"
        }
]
    };

    window.BenchTechQuizDatabase['powerbi'] = themeDefinition;
    window.BenchTechQuizDatabase['powerbi'] = themeDefinition;
})();
