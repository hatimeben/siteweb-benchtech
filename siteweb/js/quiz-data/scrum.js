/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Scrum Master & Agilité Opérationnelle
 * Standard : Guide Scrum Officiel 2020 (Ken Schwaber & Jeff Sutherland) & Certifications PSM I / PSM II
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
        "id": "scrum",
        "title": "Scrum Master & Agilité Opérationnelle",
        "icon": "fa-sync-alt",
        "source": "Guide Scrum Officiel 2020 (Ken Schwaber & Jeff Sutherland) & Certifications PSM I / PSM II",
        "duration": "10-12 min",
        "studioTarget": "hybrid-studio",
        "recommendedCourse": "Formation Scrum Master & Product Owner : Agilité Opérationnelle",
        "formTopic": "Formation Scrum & Agilité",
        "maxQuestionsPerSession": 10,
        "description": "Diagnostic officiel centré sur la posture du Scrum Master, la levée des impédiments, la facilitation des rituels agiles, l'auto-gestion des équipes et la culture de l'amélioration continue.",
        "questions": [
            {
                "id": 501,
                "scenario": "Lors d'une transformation agile d'entreprise, la direction générale nomme un ancien chef de projet au poste de Scrum Master et lui demande d'assigner quotidiennement les tâches aux développeurs et de noter leurs heures.",
                "question": "Quelle est la définition officielle de la posture du Scrum Master selon le Guide Scrum 2020 face à cette attente hiérarchique ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                    "Le Scrum Master est le manager opérationnel de l'équipe et doit distribuer le travail pour garantir la productivité individuelle.",
                    "Le Scrum Master est un véritable leader au service de l'équipe (True Leader who serves) ; il n'exerce aucune autorité hiérarchique, n'assigne aucune tâche et promeut activement l'auto-gestion des Développeurs.",
                    "Le Scrum Master délègue l'assignation des tâches au Product Owner qui est le véritable supérieur hiérarchique.",
                    "Le Scrum Master doit créer un diagramme de Gantt hebdomadaire pour valider l'activité de chaque développeur."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le Guide Scrum 2020 a clarifié sans ambiguïté : « Les Scrum Masters sont de véritables leaders qui sont au service de la Scrum Team et de l'organisation dans son ensemble. » Les Développeurs s'auto-gèrent : personne, pas même le Scrum Master, ne leur dicte comment transformer les éléments du Backlog en Incréments de valeur."
            },
            {
                "id": 502,
                "scenario": "Durant les Daily Scrums, le Scrum Master prend la parole pendant 10 minutes, interroge chaque développeur tour à tour comme un chef de projet, et consigne les réponses dans un fichier de suivi pour le management.",
                "question": "Quel dysfonctionnement majeur ce comportement reflète-t-il au regard des principes agiles et comment y remédier ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                    "Le Daily Scrum appartient exclusivement aux Développeurs pour inspecter leur avancement vers le Sprint Goal ; le Scrum Master s'assure que l'événement a lieu dans la timebox de 15 min, mais doit se mettre en retrait pour favoriser l'échange direct entre pairs.",
                    "Le Scrum Master doit porter la durée du Daily Scrum à 45 minutes pour avoir le temps de détailler les plannings individuels.",
                    "Le comportement est parfaitement normal car le Daily Scrum est une réunion de reporting d'avancement hiérarchique.",
                    "Le Scrum Master doit remplacer le Daily Scrum par un rapport écrit quotidien envoyé par e-mail par chaque développeur."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Le Daily Scrum est un événement de 15 minutes conçu PAR et POUR les Développeurs. Son but est d'inspecter les progrès vers le Sprint Goal et d'adapter le plan des prochaines 24h. Le Scrum Master leur apprend à maintenir l'échange centré sur l'objectif commun sans glisser vers le compte-rendu hiérarchique."
            },
            {
                "id": 503,
                "scenario": "Au 2ème jour du Sprint, l'équipe signale que l'accès aux serveurs de test est bloqué suite à un changement de politique de sécurité de la DSI. Un chef de projet externe suggère d'attendre la prochaine commission d'accès dans trois semaines.",
                "question": "Quelle est la redevabilité (accountability) prioritaire du Scrum Master face à cette situation critique ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                    "Demander aux développeurs de se mettre en pause et d'attendre passivement la prochaine commission.",
                    "Traiter immédiatement ce blocage organisationnel comme un impédiment (obstacle majeur) et intervenir activement auprès de la DSI pour débloquer l'équipe et protéger le Sprint Goal.",
                    "Modifier le Sprint Goal pour retirer toutes les fonctionnalités nécessitant des tests.",
                    "Exiger des Développeurs qu'ils contournent clandestinement les règles de sécurité du réseau."
                ],
                "correct": 1,
                "trapIndex": 2,
                "explanation": "L'une des responsabilités capitales du Scrum Master envers la Scrum Team est : « Éliminer les obstacles (impédiments) qui entravent la progression de la Scrum Team ». Face aux blocages administratifs ou techniques transverses, le Scrum Master agit avec proactivité pour protéger la cadence de livraison."
            },
            {
                "id": 504,
                "scenario": "En milieu de Sprint, un sponsor exécutif influent approche directement un développeur pour exiger l'ajout immédiat d'une fonctionnalité non planifiée, contournant le cadre Scrum.",
                "question": "Comment le Scrum Master doit-il intervenir pour préserver les principes agiles et le focus de l'équipe ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                    "Autoriser le développeur à faire des heures supplémentaires de nuit pour satisfaire le sponsor sans impacter le Sprint officiel.",
                    "Protéger l'équipe des perturbations extérieures, rappeler avec diplomatie au sponsor que toute demande doit être soumise au Product Owner pour le Backlog, et réaffirmer qu'aucun changement ne doit compromettre le Sprint Goal.",
                    "Exclure définitivement le sponsor de toutes les futures réunions de l'entreprise.",
                    "Arrêter immédiatement le Sprint en cours et recommencer un nouveau projet sur commande du sponsor."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le 8ème principe du Manifeste Agile promeut un rythme soutenable, et le focus est l'une des 5 valeurs Scrum fondamentales. Le Scrum Master agit comme un bouclier protecteur contre les interférences externes non négociées, tout en canalisant les besoins métier vers le Product Owner."
            },
            {
                "id": 505,
                "scenario": "À deux jours de la fin du Sprint, le Product Owner fait pression sur l'équipe pour expédier une fonctionnalité en production sans exécuter la suite de tests de non-régression exigée par la Définition de Fini (Definition of Done - DoD).",
                "question": "Quelle doit être la position inébranlable du Scrum Master en tant que garant de la qualité et de l'empirisme ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                    "Accorder une dérogation exceptionnelle pour faire plaisir au Product Owner et reporter les tests au prochain trimestre.",
                    "Rappeler fermement que la DoD est un engagement qualité non négociable : sans conformité totale, l'élément ne peut être ni présenté en Sprint Review ni déployé, car livrer du 'non fini' génère une dette technique dévastatrice.",
                    "Demander aux développeurs de supprimer les tests de la DoD pour que le ticket passe formellement au statut 'Terminé'.",
                    "Valider la livraison à 90% et comptabiliser 90% des Story Points dans la vélocité de l'équipe."
                ],
                "correct": 1,
                "trapIndex": 3,
                "explanation": "Le Scrum Master est le gardien de la transparence et du cadre empirique. Un incrément n'existe que s'il respecte rigoureusement la Definition of Done. Tout élément non conforme retourne obligatoirement dans le Product Backlog pour réestimation, sans dérogation possible."
            },
            {
                "id": 506,
                "scenario": "Durant la Rétrospective de Sprint, un conflit relationnel éclate suite à un bug en production. Deux membres de l'équipe s'accusent mutuellement, et le reste de l'équipe se mure dans un silence pesant.",
                "question": "Quelle technique de facilitation et posture le Scrum Master doit-il adopter pour restaurer la sécurité psychologique ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                    "Prendre le parti du développeur le plus expérimenté et infliger un blâme public à l'autre.",
                    "Réaffirmer la 'Directive Première de la Rétrospective' (chacun a fait du mieux qu'il pouvait compte tenu du contexte), recentrer la discussion sur les processus défaillants plutôt que sur les personnes, et co-construire une action concrète d'amélioration collective.",
                    "Annuler définitivement les rétrospectives futures car elles créent des tensions inutiles.",
                    "Transférer immédiatement le dossier à la Direction des Ressources Humaines pour arbitrage disciplinaire."
                ],
                "correct": 1,
                "trapIndex": 3,
                "explanation": "La Directive Première de Norm Kerth pose le socle de toute rétrospective saine : 'Quoi que nous découvrions, nous comprenons et croyons sincèrement que chacun a fait le meilleur travail possible compte tenu de ses connaissances, compétences et ressources'. Le Scrum Master garantit un espace d'amélioration sécurisé et axé sur les faits."
            },
            {
                "id": 507,
                "scenario": "La Direction des Ressources Humaines d'une entreprise évalue et rémunère les développeurs agiles sur le nombre individuel de lignes de code et de tickets fermés, ce qui détruit l'esprit d'entraide au sein de l'équipe.",
                "question": "En tant qu'agent de changement organisationnel (Change Agent), quelle intervention le Scrum Master doit-il mener ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                    "Ignorer le problème car le rôle du Scrum Master se limite strictement à l'animation des réunions internes de l'équipe.",
                    "Accompagner et coacher la direction RH pour aligner les politiques d'évaluation sur la performance collective de la Scrum Team et la valeur métier livrée, plutôt que sur des métriques individuelles contre-productives.",
                    "Créer des faux tickets dans Jira pour aider chaque développeur à gonfler artificiellement ses chiffres individuels.",
                    "Conseiller aux développeurs de démissionner collectivement."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le Guide Scrum explicite le service du Scrum Master envers l'organisation : il pilote la conduite du changement, aide le management à comprendre l'empirisme et œuvre à éliminer les règles organisationnelles qui entravent la collaboration d'équipe."
            },
            {
                "id": 508,
                "scenario": "Un nouveau Product Owner a tendance à rédiger des cahiers des charges fonctionnels exhaustifs de 80 pages avant chaque itération, paralysant l'équipe et retardant le démarrage des développements de deux mois.",
                "question": "Comment le Scrum Master doit-il coacher le Product Owner pour restaurer la fluidité et l'agilité ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                    "Prendre en charge la rédaction complète des spécifications à la place du Product Owner.",
                    "Lui enseigner les techniques de gestion empirique de produit, de découpage vertical de la valeur (User Story Mapping) et de raffinement continu (Refinement) afin de livrer des incréments rapidement testables au lieu de documents fleuves.",
                    "Exiger du Product Owner qu'il double le volume de sa documentation pour être encore plus précis.",
                    "Interdire au Product Owner de communiquer avec les Développeurs."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le Scrum Master sert le Product Owner en l'aidant à trouver des techniques pour définir efficacement les objectifs et structurer le Backlog de manière empirique. Il n'assume pas la responsabilité du contenu produit, mais transmet les bonnes pratiques d'agilité opérationnelle."
            },
            {
                "id": 509,
                "scenario": "En analysant le Sprint Burndown Chart à mi-parcours d'un Sprint de 10 jours, le Scrum Master observe que la courbe reste parfaitement horizontale jusqu'au 8ème jour, avant de plonger brutalement le 10ème jour.",
                "question": "Quel dysfonctionnement agile typique le Scrum Master identifie-t-il et quel remède préconise-t-il ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                    "L'équipe reproduit un mini-cycle en V au sein du Sprint (les développeurs codent tout, puis testent tout le dernier jour) ; le Scrum Master doit coacher l'équipe sur le flux continu, le swarming et la validation de la DoD story par story.",
                    "Tout fonctionne à merveille car l'objectif a été atteint le dernier jour, il n'y a donc rien à changer.",
                    "Il faut supprimer le Burndown Chart car les métriques visuelles n'ont aucune utilité en Scrum.",
                    "Il faut obliger les Développeurs à clôturer un nombre identique de points chaque jour à heure fixe."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Une chute brutale en toute fin d'itération ('waterfall inside a sprint') est un piège classique : les fonctionnalités restent 'en cours' jusqu'à la fin, retardant la découverte des bugs. Le Scrum Master favorise un flux continu où chaque User Story est conçue, codée, testée et 'Finie' successivement au fil de l'eau."
            },
            {
                "id": 510,
                "scenario": "Plusieurs Scrum Teams travaillent sur une même plateforme bancaire complexe. Des conflits d'intégration fréquents bloquent les déploiements et créent des tensions vives entre les équipes.",
                "question": "Quelle démarche de synchronisation et de facilitation le Scrum Master doit-il promouvoir à l'échelle (Nexus / Scrum of Scrums) ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                    "Isoler chaque équipe pour qu'elle ne communique plus avec les autres jusqu'à la fin de l'année.",
                    "Instaurer des rituels réguliers de synchronisation inter-équipes (Scrum of Scrums, Nexus Daily) pour détecter les dépendances techniques en amont et garantir la livraison d'un Incrément Intégré unique à chaque fin de Sprint.",
                    "Supprimer le cadre Scrum et réinstaurer un cycle en V avec des phases d'intégration semestrielles.",
                    "Nommer un chef de projet suprême chargé de réécrire le code de toutes les équipes."
                ],
                "correct": 1,
                "trapIndex": 2,
                "explanation": "Dans le Scrum à l'échelle (comme Nexus de Scrum.org ou LeSS), les Scrum Masters travaillent en réseau pour identifier et éliminer les dépendances croisées (Cross-team impediments). La clé est l'intégration continue et une synchronisation fréquente pour délivrer un incrément global fonctionnel."
            }
        ]
    };

    window.BenchTechQuizDatabase["scrum"] = themeDefinition;
    window.BenchTechQuizDatabase["scrum-agile"] = themeDefinition;
    if ("scrum".includes('-')) {
        window.BenchTechQuizDatabase["scrum".replace(/-/g, '_')] = themeDefinition;
    }
    if ("scrum".includes('_')) {
        window.BenchTechQuizDatabase["scrum".replace(/_/g, '-')] = themeDefinition;
    }
})();
