/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Scrum, Agilité Opérationnelle & Product Ownership
 * Standard : Guide Scrum Officiel 2020 (Ken Schwaber & Jeff Sutherland) & Pratiques Terrain
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
        "id": "scrum",
        "title": "Scrum, Agilité Opérationnelle & Product Ownership",
        "icon": "fa-sync-alt",
        "source": "Guide Scrum Officiel 2020 (Ken Schwaber & Jeff Sutherland) & Certifications PSM / PSPO",
        "duration": "10-12 min",
        "studioTarget": "hybrid-studio",
        "recommendedCourse": "Formation Scrum Master & Product Owner : Agilité Opérationnelle",
        "formTopic": "Formation Scrum & Agilité",
        "maxQuestionsPerSession": 10,
        "description": "Diagnostic sans complaisance sur la réalité de l'agilité : respect de la Definition of Done (DoD), autonomie des équipes, rôle du PO, rituels Scrum et vélocité sans dette technique.",
        "questions": [
            {
                "id": 501,
                "scenario": "Une équipe démarre un projet en Scrum. Lors de la première réunion, le responsable de département demande qui est le supérieur hiérarchique direct de l'équipe au sein du cadre Scrum.",
                "question": "Quelle est la structure hiérarchique officielle au sein d'une Scrum Team selon le Guide Scrum 2020 ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                    "Le Scrum Master est le manager hiérarchique des Développeurs.",
                    "Il n'y a aucune hiérarchie ni sous-équipe au sein d'une Scrum Team : c'est une unité cohésive de professionnels focalisés sur un seul Product Goal à la fois.",
                    "Le Product Owner est le supérieur hiérarchique du Scrum Master et de l'équipe technique.",
                    "Le Tech Lead est le responsable hiérarchique des Développeurs."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le Guide Scrum 2020 stipule clairement : « Au sein d’une Scrum Team, il n’y a pas de sous-équipes ni de hiérarchies. Il s’agit d’une unité cohésive de professionnels composée d'un Scrum Master, d'un Product Owner et de Développeurs. » L'équipe est auto-gérée et pluridisciplinaire."
            },
            {
                "id": 502,
                "scenario": "Durant le Sprint, une équipe organise sa réunion quotidienne 'Daily Scrum'. Les participants constatent que la réunion s'éternise et dépasse régulièrement 40 minutes en débat technique.",
                "question": "Quelle est la durée maximale (Timebox) et l'objectif strict du Daily Scrum ?",
                "difficulty": "Fondamentaux",
                "points": 1,
                "answers": [
                    "La durée est de 15 minutes maximum, réservée aux Développeurs pour inspecter l'avancement vers le Sprint Goal et adapter le Sprint Backlog du jour.",
                    "La durée est de 30 minutes et sert à faire un rapport d'avancement détaillé au management.",
                    "La durée est libre tant que tous les problèmes techniques sont résolus en séance.",
                    "La réunion doit durer exactement 45 minutes avec un tour de table de chaque développeur."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Le Daily Scrum est un événement de 15 minutes maximum (Timeboxed) pour les Développeurs de la Scrum Team. Son but n'est pas de faire un reporting hiérarchique ni de résoudre des débats d'architecture complexes, mais d'inspecter les progrès vers le Sprint Goal et d'adapter le plan de travail des prochaines 24 heures."
            },
            {
                "id": 503,
                "scenario": "À deux jours de la fin du Sprint, l'équipe réalise qu'une User Story ne pourra pas respecter tous les critères de la Définition de Fini (Definition of Done - DoD). Le Product Owner propose de la livrer telle quelle en production et de corriger les anomalies au Sprint suivant.",
                "question": "Que prescrit rigoureusement le Guide Scrum face à un élément du Backlog non conforme à la DoD ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                    "Valider l'élément à 80% et comptabiliser 80% de ses Story Points dans la vélocité du Sprint.",
                    "Si un élément ne respecte pas la Definition of Done, il ne peut être ni présenté en Sprint Review, ni mis en production ; il retourne dans le Product Backlog pour réestimation et repriorisation.",
                    "Prolonger la durée du Sprint de 3 jours pour permettre de finaliser les tests.",
                    "Supprimer temporairement les critères non respectés de la DoD pour clore le ticket."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le Guide Scrum est formel : un incrément n'existe que s'il est 'Fini' selon la DoD. Livrer du 'presque fini' est la cause première de l'accumulation de dette technique. L'élément non fini retourne dans le Backlog, aucun point de vélocité partiel n'est accordé, et le problème est analysé lors de la Rétrospective."
            },
            {
                "id": 504,
                "scenario": "Lors du Sprint Planning, le Directeur de Projet intervient pour exiger que l'équipe s'engage sur 50 Story Points, alors que la vélocité moyenne constatée de l'équipe est de 30 points.",
                "question": "Quelle est la règle Scrum fondamentale concernant la sélection de la charge de travail du Sprint ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                    "Le Scrum Master doit accepter la demande et imposer des heures supplémentaires à l'équipe.",
                    "Les Développeurs sont les seuls habilités à évaluer ce qu'ils sont capables d'accomplir durant le Sprint en fonction de leur capacité réelle et de leur performance passée.",
                    "Le Product Owner a le pouvoir hiérarchique de forcer l'équipe à prendre les 50 points.",
                    "Il faut diviser la taille de chaque User Story par deux pour faire correspondre le chiffre."
                ],
                "correct": 1,
                "trapIndex": 2,
                "explanation": "Dans Scrum, le Product Owner définit les priorités métiers (le QUOI), mais les Développeurs sont les seuls souverains pour décider du volume de travail qu'ils peuvent engager dans le Sprint (le COMBIEN). Le Scrum Master doit protéger cette auto-gestion contre les pressions managériales extérieures."
            },
            {
                "id": 505,
                "scenario": "En milieu de Sprint, le Product Owner souhaite ajouter en urgence une nouvelle fonctionnalité majeure demandée par un client stratégique, modifiant fondamentalement l'objectif du Sprint.",
                "question": "Comment le cadre Scrum gère-t-il les modifications en cours de Sprint ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                    "Le Product Owner peut modifier le Sprint Backlog à tout moment sans consulter l'équipe.",
                    "Aucun changement n'est autorisé s'il met en péril l'Objectif du Sprint (Sprint Goal). Si le Sprint Goal devient obsolète, seul le Product Owner a le pouvoir d'annuler le Sprint.",
                    "L'équipe doit immédiatement stopper le Sprint en cours et recommencer un nouveau projet.",
                    "Le Scrum Master doit rejeter systématiquement toute demande du Product Owner jusqu'à l'année suivante."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "La règle clé du Sprint est : « Aucun changement n'est effectué qui mettrait en péril le Sprint Goal ». Le périmètre peut être clarifié et renégocié entre le PO et les Développeurs au fur et à mesure des découvertes, mais sans altérer l'objectif. Si l'objectif n'a plus aucun sens économique, seul le Product Owner peut annuler le Sprint."
            },
            {
                "id": 506,
                "scenario": "Une entreprise applique Scrum depuis 6 mois mais constate une baisse continue de la vélocité et une multiplication des bugs en production. L'équipe technique avoue ne faire aucun test unitaire ni refactoring faute de temps accordé par le management.",
                "question": "Quel concept d'ingénierie logicielle explique cette dégradation continue et comment l'adresser dans Scrum ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                    "C'est la dette technique accumulée ; la solution consiste à renforcer la Definition of Done (tests automatisés, revue de code) et à allouer explicitement du temps de refactoring dans chaque Sprint.",
                    "C'est un manque de discipline des développeurs ; il faut remplacer le Scrum Master par un chef de projet autoritaire.",
                    "Scrum n'est pas adapté au développement logiciel : il faut repasser en Cycle en V.",
                    "Il faut doubler la durée des Sprints (passer de 2 à 4 semaines) pour avoir le temps de coder."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "La dette technique (Technical Debt) est le coût futur engendré par des choix de conception précipités ou un manque de rigueur. Pour préserver la vélocité à long terme, la Scrum Team doit maintenir une Definition of Done exigeante (couverture de tests, conformité d'architecture) et intégrer la maintenance continue dans chaque Sprint."
            },
            {
                "id": 507,
                "scenario": "Lors d'un atelier de raffinement du Backlog (Product Backlog Refinement), le Product Owner présente une User Story : 'En tant qu'utilisateur, je veux une application ergonomique pour améliorer mon expérience'. L'équipe refuse de l'estimer.",
                "question": "Quelle méthode d'évaluation de la qualité d'une User Story justifie le refus légitime de l'équipe ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                    "Le modèle INVEST : cette User Story viole les critères 'Testable' (critères d'acceptation flous), 'Small' et 'Estimable'.",
                    "La matrice d'Eisenhower qui classe cette tâche en 'non urgent'.",
                    "Le modèle MoSCoW car il manque la mention 'Must Have'.",
                    "La norme ISO 9001 sur la gestion documentaire."
                ],
                "correct": 0,
                "trapIndex": 2,
                "explanation": "Le standard INVEST (Indépendante, Négociable, Valeur, Estimable, Suffisamment petite/Small, Testable) est la règle d'or d'une User Story prête (Definition of Ready). Une demande vague sans critères d'acceptation vérifiables (Gherkin : Given/When/Then) est inestimable et ne peut entrer en Sprint Planning."
            },
            {
                "id": 508,
                "scenario": "Durant la Sprint Review, les parties prenantes (Stakeholders) découvrent l'incrément logiciel et expriment des retours critiques sur l'utilisabilité d'un écran validé par le PO.",
                "question": "Quelle est la finalité exacte de la Sprint Review et la bonne réaction de l'équipe ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                    "La Sprint Review est une simple séance de démo où les parties prenantes doivent signer un bon de validation sans faire de remarques.",
                    "La Sprint Review est une session collaborative d'inspection de l'incrément et d'adaptation du Product Backlog : les retours des parties prenantes sont précieux et viennent nourrir les priorités des prochains Sprints.",
                    "Le Scrum Master doit expulser les parties prenantes de la réunion car elles n'ont pas le droit de parole.",
                    "L'équipe doit modifier le code en direct pendant la réunion pour satisfaire les demandes."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "La Sprint Review n'est JAMAIS une simple démonstration unilatérale d'approbation. C'est un atelier de travail collaboratif de 4h maximum (pour 1 mois) où l'on inspecte le résultat du Sprint, la situation du marché et les retours utilisateurs pour réajuster le Product Backlog ensemble."
            },
            {
                "id": 509,
                "scenario": "Une organisation déploie Scrum sur 8 équipes distinctes (soit 60 développeurs) travaillant sur le même produit logiciel e-commerce complexe. Des conflits d'intégration majeurs surviennent en fin de Sprint.",
                "question": "Quel principe d'architecture organisationnelle Scrum à l'échelle (Scaled Scrum / Nexus / LeSS) doit être instauré ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                    "Chaque équipe doit créer son propre Product Backlog et son propre Product Owner indépendant.",
                    "Il doit y avoir un seul Product Backlog commun, un seul Product Owner souverain, une Définition de Fini partagée (Integrated DoD) et une intégration continue transversale à chaque Sprint.",
                    "Il faut fusionner les 60 personnes en une seule Scrum Team géante.",
                    "Il faut repasser en méthodologie Cycle en V avec des phases de validation trimestrielles."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Dans tous les cadres d'agilité à l'échelle respectueux de Scrum (comme Nexus ou LeSS) : UN SEUL PRODUIT = UN SEUL PRODUCT BACKLOG = UN SEUL PRODUCT OWNER. Multiplier les backlogs crée des silos contradictoires. Les équipes partagent une Definition of Done commune qui exige un Incrément Intégré unique à chaque fin de Sprint."
            },
            {
                "id": 510,
                "scenario": "Durant la Rétrospective de Sprint, un conflit relationnel aigu éclate entre deux développeurs concernant la qualité du code. Le Scrum Master constate que la sécurité psychologique de l'équipe est menacée.",
                "question": "Quelle posture de 'Leader Serviteur' (Servant Leader / Leader-Coach) le Scrum Master doit-il adopter pour préserver l'efficacité du collectif ?",
                "difficulty": "Expert",
                "points": 4,
                "answers": [
                    "Prendre parti pour le développeur le plus ancien et sanctionner l'autre.",
                    "Faciliter l'échange de manière neutre en ramenant la discussion sur les faits objectifs et les standards de la DoD, instaurer un cadre d'écoute bienveillante et co-construire une action d'amélioration mesurable pour le prochain Sprint.",
                    "Interdire les rétrospectives futures pour éviter les tensions au sein de l'équipe.",
                    "Transférer immédiatement le litige à la Direction des Ressources Humaines sans intervenir."
                ],
                "correct": 1,
                "trapIndex": 3,
                "explanation": "Le Scrum Master est un leader au service de l'équipe et de l'organisation. Son rôle en rétrospective est de créer un espace de sécurité psychologique où les dysfonctionnements peuvent être exprimés sans jugement de personne, en se concentrant sur les processus, les accords d'équipe (Working Agreements) et des plans d'action concrets."
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
