/**
 * BenchTech Academy - Banque de Questions Dynamique
 * Thématique : Excel Avancé, Power Query & Modélisation Financière
 * Généré automatiquement depuis benchtech_formations.db (Pool de 40 questions)
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
        "id": "excel",
        "title": "Excel Avancé, Power Query & Modélisation Financière",
        "icon": "fa-file-excel",
        "source": "Microsoft 365 Dynamic Arrays & ETL Power Query Methodology",
        "duration": "10-12 min",
        "studioTarget": "excel-studio",
        "recommendedCourse": "Formation Excel Avancé : Power Query & Modélisation",
        "formTopic": "Formation Excel Sur-Mesure",
        "maxQuestionsPerSession": 10,
        "description": "Évaluation de haut niveau calibrée par BenchTech avec scénarios d'entreprise réels et diagnostics opérationnels.",
        "questions": [
        {
                "id": 31,
                "scenario": "Chaque fin de mois, vous devez importer et consolider 20 fichiers Excel de ventes identiques déposés dans un dossier réseau partagé par vos agences régionales.",
                "question": "Quelle fonctionnalité native d'Excel permet de consolider automatiquement tous les classeurs de ce dossier en un seul clic chaque mois ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                        "Power Query : Obtenir des données > À partir d'un dossier (Combine Files).",
                        "Copier-coller manuellement les 20 fichiers dans une feuille Excel unique.",
                        "Utiliser la fonction RECHERCHEV en liant 20 formules dans chaque cellule.",
                        "Enregistrer le classeur au format CSV compressé."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "La connexion Power Query 'À partir d'un dossier' (Get Data -> From Folder) détecte automatiquement tous les fichiers du répertoire, combine leurs tables et applique les transformations définies en un seul rafraîchissement sans code VBA.",
                "linkedBlockCode": "EXC-ETL-01",
                "linkedBlockTitle": "Power Query pour Excel : Automatisation des Imports Mensuels",
                "themeCode": "excel"
        },
        {
                "id": 32,
                "scenario": "Vous devez rechercher le tarif d'un produit selon sa référence. La colonne des tarifs se trouve à gauche de la colonne des références dans votre tableau source.",
                "question": "Quelle fonction moderne d'Excel 365 remplace avantageusement RECHERCHEV et s'affranchit totalement de la position des colonnes ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                        "XLOOKUP (RECHERCHEX en version française).",
                        "RECHERCHEV avec un numéro de colonne négatif (-1).",
                        "CONCATENER avec SOMMEPROD.",
                        "SIERREUR imbriqué dans EQUIV."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "XLOOKUP (RECHERCHEX) s'affranchit du sens de lecture gauche/droite, ne nécessite pas de compter les index de colonnes, gère nativement les erreurs de non-trouvé ([si_non_trouvé]) et recherche en correspondance exacte par défaut.",
                "linkedBlockCode": "EXC-MAT-02",
                "linkedBlockTitle": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
                "themeCode": "excel"
        },
        {
                "id": 33,
                "scenario": "Dans une liste de 10 000 commandes, vous devez extraire dynamiquement la liste sans doublons des clients ayant acheté un produit donné, triée par ordre alphabétique.",
                "question": "Quelle formule matricielle dynamique moderne réalise cette extraction complète en une seule cellule ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "=SORT(UNIQUE(FILTER(Clients, Produits = \"Produit A\"))).",
                        "=INDEX(Clients, EQUIV(Produit A, Produits, 0)).",
                        "=SOMME.SI.ENS(Clients, Produits, \"Produit A\").",
                        "=RECHERCHEX(Produit A, Produits, Clients)."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "=SORT(UNIQUE(FILTER(...))) combine la sélection dynamique avec FILTER, l'élimination des doublons avec UNIQUE, et le tri alphabétique avec SORT sans aucune macro.",
                "linkedBlockCode": "EXC-MAT-02",
                "linkedBlockTitle": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
                "themeCode": "excel"
        },
        {
                "id": 34,
                "scenario": "Lors de l'actualisation d'une requête Power Query, une erreur 'Le format de la valeur n'a pas pu être converti en nombre' bloque l'actualisation de votre rapport de gestion.",
                "question": "Quelle est la cause la plus fréquente lors de l'import de données multi-régionales et comment la sécuriser durablement ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "Un conflit de séparateur décimal (point vs virgule) ; utiliser 'Modifier le type avec les paramètres régionaux'.",
                        "Le fichier Excel est protégé par un mot de passe en lecture seule.",
                        "Il faut réinstaller la suite bureautique Office en langue anglaise.",
                        "La mémoire vive de l'ordinateur est insuffisante pour charger plus de 100 lignes."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Le séparateur décimal (point vs virgule) et le format de date diffèrent selon les paramètres régionaux de l'OS. Dans Power Query, utiliser 'Modifier le type avec les paramètres régionaux' (Using Locale) fige le comportement indépendamment de la machine de l'utilisateur final.",
                "linkedBlockCode": "EXC-ETL-01",
                "linkedBlockTitle": "Power Query pour Excel : Automatisation des Imports Mensuels",
                "themeCode": "excel"
        },
        {
                "id": 35,
                "scenario": "Vous saisissez une formule matricielle dynamique '=FILTER(A2:B100, C2:C100 > 1000)' en cellule E2. Excel affiche l'erreur '#EPARS!' (ou '#SPILL!').",
                "question": "Quelle est la cause précise de l'erreur #EPARS! (#SPILL!) et comment la résoudre immédiatement ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "La plage de débordement dynamique est obstruée par du contenu existant dans les cellules situées sous la formule.",
                        "La formule contient une division par zéro non gérée par SIERREUR.",
                        "Le nombre de colonnes de la feuille Excel est dépassé.",
                        "La fonction FILTER nécessite obligatoirement l'activation de macros VBA."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "L'erreur #SPILL! survient lorsque la plage d'extension naturelle nécessaire au tableau dynamique retourné par la formule est bloquée par au moins une cellule non vide (texte, espace, formule) dans la zone d'épandage.",
                "linkedBlockCode": "EXC-MAT-02",
                "linkedBlockTitle": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
                "themeCode": "excel"
        },
        {
                "id": 36,
                "scenario": "Vous devez créer un calcul complexe de décote financière réutilisable dans des centaines de cellules de votre modèle financier, sans jamais utiliser de code VBA / macro.",
                "question": "Quelle fonction avancée d'Excel 365 permet de créer des fonctions personnalisées nommées directement avec la syntaxe de formule native ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "La fonction LAMBDA déclarée et enregistrée dans le Gestionnaire de Noms.",
                        "La fonction INDIRECT combinée avec ADRESSE.",
                        "La fonction RECHERCHEV imbriquée dans un format conditionnel.",
                        "Un tableau croisé dynamique avec champ calculé classique."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "La fonction LAMBDA permet de définir des fonctions personnalisées avec des paramètres d'entrée et une logique de calcul. En l'associant au Gestionnaire de noms d'Excel (ex: 'CalculDecote = LAMBDA(ca, taux, ca * (1 - taux))'), elle devient appelable comme n'importe quelle fonction native.",
                "linkedBlockCode": "EXC-MAT-02",
                "linkedBlockTitle": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
                "themeCode": "excel"
        },
        {
                "id": 37,
                "scenario": "Dans un modèle Power Query volumineux (500 000 lignes connectées à une base SQL Server), les rafraîchissements deviennent extrêmement lents après l'ajout d'une étape de filtrage.",
                "question": "Quel mécanisme fondamental d'optimisation de Power Query a très probablement été rompu par une transformation non supportée ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "La rupture du Query Folding (Pliage de requête) obligeant le moteur local à rapatrier toutes les lignes non filtrées.",
                        "La désactivation automatique des index primaires de la base SQL source.",
                        "Le dépassement du tampon de l'historique d'annulation d'Excel.",
                        "La mise en veille du port Ethernet de la machine client."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Le 'Query Folding' (Pliage de Requête) permet à Power Query de traduire ses étapes de transformation en une requête SQL native exécutée directement par le serveur distant. Dès qu'une étape non pliable (ex: fonction M personnalisée non traduisible) est insérée, Power Query doit rapatrier l'ensemble des données brutes en local.",
                "linkedBlockCode": "EXC-ETL-01",
                "linkedBlockTitle": "Power Query pour Excel : Automatisation des Imports Mensuels",
                "themeCode": "excel"
        },
        {
                "id": 38,
                "scenario": "Vous devez manipuler un tableau dynamique contenant 15 colonnes et n'extraire que les colonnes 1, 3 et 7 sans devoir reconstituer manuellement chaque plage.",
                "question": "Quelle fonction matricielle dynamique récente d'Excel 365 réalise cette sélection horizontale de colonnes ciblées ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "La fonction CHOOSECOLS (CHOISIRCOLS).",
                        "La fonction COLONNE() avec EQUIV.",
                        "La fonction DECALER avec un masque matriciel binaire.",
                        "La commande 'Masquer les colonnes' de l'onglet Affichage."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "CHOOSECOLS (CHOISIRCOLS en français) permet d'extraire spécifiquement certaines colonnes d'une matrice en indiquant leurs indices (ex: =CHOOSECOLS(Tableau, 1, 3, 7)). Son pendant vertical pour les lignes est CHOOSEROWS.",
                "linkedBlockCode": "EXC-MAT-02",
                "linkedBlockTitle": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
                "themeCode": "excel"
        },
        {
                "id": 39,
                "scenario": "Dans un modèle de consolidation financière de groupe, vous devez cumuler récursivement des flux d'intérêts composés sur un tableau de cash-flows sans boucle VBA.",
                "question": "Quelle fonction helper avancée de la famille LAMBDA permet d'itérer sur un tableau en conservant un accumulateur d'état (fold/reduce fonctionnel) ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                        "La fonction SCAN (pour voir l'historique intermédiaire) ou REDUCE (pour la valeur finale cumulée).",
                        "La fonction SOMME.SI.ENS combinée avec SOUS.TOTAL.",
                        "L'outil Valeur Cible (Goal Seek) exécuté en tâche de fond.",
                        "Une référence circulaire volontaire avec calcul itératif activé."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "SCAN et REDUCE sont les fonctions fonctionnelles d'Excel. REDUCE applique une fonction LAMBDA sur chaque élément et renvoie la valeur finale accumulée, tandis que SCAN renvoie un tableau dynamique contenant toutes les valeurs intermédiaires de l'accumulateur.",
                "linkedBlockCode": "EXC-MAT-02",
                "linkedBlockTitle": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
                "themeCode": "excel"
        },
        {
                "id": 40,
                "scenario": "Un modèle de données Excel Data Model (Power Pivot) de 1,5 Go commence à saturer la mémoire des postes utilisateurs lors du recalcul des tableaux croisés dynamiques.",
                "question": "Quelle mesure experte de modélisation relationnelle dans le modèle interne VertiPaq d'Excel apporte le gain de mémoire le plus décisif ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                        "Supprimer les colonnes inutiles à forte cardinalité, remplacer les colonnes calculées par des mesures DAX et désactiver la date automatique.",
                        "Enregistrer le classeur sous format texte brut TXT délimité par des tabulations.",
                        "Changer la police de caractères de toutes les cellules en police Arial 10.",
                        "Augmenter la taille du fichier d'échange virtuel Windows (Swap)."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Éliminer les colonnes calculées créées dans la table de faits au profit de mesures explicites DAX, supprimer les colonnes d'identifiants techniques haute cardinalité (GUID, clés de substitution) non utilisées dans les relations, et désactiver la date/heure automatique.",
                "linkedBlockCode": "EXC-ETL-01",
                "linkedBlockTitle": "Power Query pour Excel : Automatisation des Imports Mensuels",
                "themeCode": "excel"
        }
]
    };

    window.BenchTechQuizDatabase['excel'] = themeDefinition;
    window.BenchTechQuizDatabase['excel'] = themeDefinition;
})();
