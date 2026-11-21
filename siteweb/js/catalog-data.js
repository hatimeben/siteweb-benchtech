/**
 * Catalogue Pédagogique Officiel BenchTech - Généré depuis benchtech_formations.db
 */

window.BENCHTECH_CATALOG = {
  "metadata": {
    "title": "Catalogue des Formations Sur-Mesure BenchTech",
    "version": "2026.1",
    "source": "benchtech_formations.db",
    "author": "BenchTech Ingénierie Pédagogique"
  },
  "filieres": [
    {
      "id_filiere": 1,
      "code": "PBI",
      "libelle": "Microsoft Power BI & Data Analytics",
      "description": "Ingénierie décisionnelle, modélisation en étoile, langage DAX avancé, optimisation VertiPaq et gouvernance Power BI Service.",
      "icone": "fa-chart-pie",
      "blocs": [
        {
          "id_bloc": 1,
          "code_bloc": "PBI-ETL-01",
          "titre_bloc": "Ingestion Multi-Sources & Préparation Power Query",
          "duree_heures": 3.5,
          "badge_technique": "Power Query ETL",
          "objectif_operationnel": "Nettoyer, transformer et fusionner des sources hétérogènes (Excel, SQL, CSV) en modèles propres sans code.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [
            {
              "id_module": 1,
              "titre_module": "Connexions & Dépivotage de Structures Tabulaires",
              "theorie_notions": "Types de connecteurs, isolation des étapes M, principes du dépivotage (Unpivot) vs Transposition.",
              "atelier_lab": "Lab #1 : Récupérer 12 fichiers comptables mensuels éclatés, normaliser les colonnes dates/montants et consolider le tout en une table unique.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 2,
              "titre_module": "Jointures Complexes & Gestion Robuste des Anomalies",
              "theorie_notions": "Types de jointures dans Power Query (Left Outer, Anti-Join), typage des colonnes, traitement des valeurs nulles et erreurs d'ingestion.",
              "atelier_lab": "Lab #2 : Détection automatique des lignes orphelines entre fichier des ventes et référentiel clients avant chargement dans le modèle.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "CTRL_GEST",
              "libelle": "Contrôleurs de Gestion, DAF & Directeurs Financiers",
              "pertinence": "Essentiel"
            },
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 2,
          "code_bloc": "PBI-MOD-02",
          "titre_bloc": "Modélisation Dimensionnelle en Étoile (Star Schema)",
          "duree_heures": 3.5,
          "badge_technique": "Modélisation Kimball",
          "objectif_operationnel": "Structurer tables de faits et de dimensions, résoudre les relations plusieurs-à-plusieurs et optimiser le schéma.",
          "ordre_pedagogique": 2,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [],
          "profils_cibles": [
            {
              "code": "CTRL_GEST",
              "libelle": "Contrôleurs de Gestion, DAF & Directeurs Financiers",
              "pertinence": "Essentiel"
            },
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 3,
          "code_bloc": "PBI-DAX-03",
          "titre_bloc": "Fondations DAX & Transition de Contexte (CALCULATE)",
          "duree_heures": 3.5,
          "badge_technique": "DAX Moteur",
          "objectif_operationnel": "Maîtriser les contextes de ligne et de filtre, le mécanisme CALCULATE et les modificateurs ALL/ALLEXCEPT.",
          "ordre_pedagogique": 3,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [
            {
              "id_module": 3,
              "titre_module": "Transition de Contexte & Fonction CALCULATE",
              "theorie_notions": "Mécanisme interne de Context Transition. Différence entre contexte de ligne itéré et filtre global, modificateurs ALL, ALLEXCEPT, KEEPFILTERS.",
              "atelier_lab": "Lab #1 : Audit d'un modèle financier avec totaux faussés en matrice croisée. Réécriture des mesures DAX avec maintien des filtres métiers.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 4,
              "titre_module": "Calculs Relatifs & Pondérations Dynamiques",
              "theorie_notions": "Fonctions itératives SUMX/AVERAGEX, calculs de parts de marché (%), quotients protégés avec DIVIDE et ratios contextuels.",
              "atelier_lab": "Lab #2 : Conception d'une mesure dynamique affichant le % du chiffre d'affaires par rapport au sous-total de la catégorie et au total général.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "CTRL_GEST",
              "libelle": "Contrôleurs de Gestion, DAF & Directeurs Financiers",
              "pertinence": "Essentiel"
            },
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 4,
          "code_bloc": "PBI-TIM-04",
          "titre_bloc": "DAX Temporel (Time Intelligence) & Analyses Comparatives",
          "duree_heures": 3.5,
          "badge_technique": "Time Intelligence",
          "objectif_operationnel": "Calculer les cumuls YTD/QTD, les écarts annuels YoY et les fenêtres glissantes dynamiques.",
          "ordre_pedagogique": 4,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [],
          "profils_cibles": [
            {
              "code": "CTRL_GEST",
              "libelle": "Contrôleurs de Gestion, DAF & Directeurs Financiers",
              "pertinence": "Essentiel"
            },
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 5,
          "code_bloc": "PBI-OPT-05",
          "titre_bloc": "Optimisation Moteur VertiPaq & Réduction Mémoire",
          "duree_heures": 3.5,
          "badge_technique": "Tuning VertiPaq",
          "objectif_operationnel": "Diagnostiquer la cardinalité des colonnes avec DAX Studio et diviser l'empreinte RAM par 5.",
          "ordre_pedagogique": 5,
          "niveau_code": "EXPT",
          "niveau_libelle": "Expert / Architecte",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Essentiel"
            },
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            }
          ]
        },
        {
          "id_bloc": 6,
          "code_bloc": "PBI-GOV-06",
          "titre_bloc": "Sécurité à la Ligne (RLS) & Déploiement Power BI Service",
          "duree_heures": 3.5,
          "badge_technique": "Gouvernance & RLS",
          "objectif_operationnel": "Cloisonner les données par profil utilisateur avec RLS dynamique et gérer les espaces de travail Fabric/Service.",
          "ordre_pedagogique": 6,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [],
          "profils_cibles": []
        }
      ]
    },
    {
      "id_filiere": 2,
      "code": "COP",
      "libelle": "Microsoft Copilot Studio & Agents IA d'Entreprise",
      "description": "Conception d'agents autonomes, orchestration de prompts génératifs, intégration RAG sécurisée et connecteurs Power Platform.",
      "icone": "fa-robot",
      "blocs": [
        {
          "id_bloc": 12,
          "code_bloc": "COP-FND-01",
          "titre_bloc": "Fondations & Architecture des Copilotes Métiers",
          "duree_heures": 3.5,
          "badge_technique": "Studio & Canaux",
          "objectif_operationnel": "Créer un premier agent conversationnel, maîtriser les déclencheurs et publier sur Teams ou le Web.",
          "ordre_pedagogique": 1,
          "niveau_code": "FOND",
          "niveau_libelle": "Fondamentaux / Prise en main",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Recommandé"
            },
            {
              "code": "MGR_PROJ",
              "libelle": "Chefs de Projet Digitaux & Product Owners",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 13,
          "code_bloc": "COP-RAG-02",
          "titre_bloc": "Architecture RAG & Ancrage Sécurisé sur Données Entreprise",
          "duree_heures": 3.5,
          "badge_technique": "RAG d'Entreprise",
          "objectif_operationnel": "Connecter l'agent à des sources documentaires (SharePoint, Dataverse) et paramétrer les filtres anti-hallucination.",
          "ordre_pedagogique": 2,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [
            {
              "id_module": 7,
              "titre_module": "Indexation Sémantique & Ancrage Documentaire",
              "theorie_notions": "Fonctionnement du chunking de documents PDF/Word, génération des embeddings et calcul de proximité vectorielle (similarité cosinus).",
              "atelier_lab": "Lab #1 : Indexation d'une base de procédures internes RH (50 pages) et validation de la fidélité des citations de sources générées par l'agent.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 8,
              "titre_module": "Garde-Fous, Confidentialité & Modération",
              "theorie_notions": "Configuration du niveau de température, filtrage des sujets sensibles, blocage des injections de prompts et conformité d'accès aux données.",
              "atelier_lab": "Lab #2 : Test d'intrusion par invite (Prompt Injection) pour éprouver la résistance de l'agent et verrouiller les réponses aux seules sources autorisées.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            },
            {
              "code": "MGR_PROJ",
              "libelle": "Chefs de Projet Digitaux & Product Owners",
              "pertinence": "Recommandé"
            }
          ]
        },
        {
          "id_bloc": 14,
          "code_bloc": "COP-ACT-03",
          "titre_bloc": "Actions Avancées & Déclenchement de Flux Power Automate",
          "duree_heures": 3.5,
          "badge_technique": "Power Automate & API",
          "objectif_operationnel": "Permettre à l'agent d'exécuter des actions réelles dans le SI (créer un ticket, interroger un CRM via REST API).",
          "ordre_pedagogique": 3,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 15,
          "code_bloc": "COP-PRM-04",
          "titre_bloc": "Prompt Engineering pour LLMs & Personnalisation de Ton",
          "duree_heures": 3.5,
          "badge_technique": "Prompt Engineering",
          "objectif_operationnel": "Structurer des consignes système précises, variables contextuelles et règles de gouvernance pour l'agent.",
          "ordre_pedagogique": 4,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [],
          "profils_cibles": []
        }
      ]
    },
    {
      "id_filiere": 3,
      "code": "SQL",
      "libelle": "SQL Avancé, Optimisation SGBD & PostgreSQL",
      "description": "Modélisation relationnelle 3NF, requêtes analytiques (Window Functions), lecture EXPLAIN ANALYZE et indexation B-Tree haute performance.",
      "icone": "fa-database",
      "blocs": [
        {
          "id_bloc": 7,
          "code_bloc": "SQL-MOD-01",
          "titre_bloc": "Modélisation Relationnelle 3NF & Intégrité Référentielle",
          "duree_heures": 3.5,
          "badge_technique": "Conception 3NF",
          "objectif_operationnel": "Normaliser un schéma transactionnel, définir les contraintes CHECK/FK et éliminer les anomalies de mise à jour.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 8,
          "code_bloc": "SQL-WIN-02",
          "titre_bloc": "SQL Analytique Avancé & Window Functions (OVER / PARTITION)",
          "duree_heures": 3.5,
          "badge_technique": "Window Functions",
          "objectif_operationnel": "Effectuer des calculs de rang (DENSE_RANK), totaux cumulés et décalages temporels (LEAD/LAG) sans jointures.",
          "ordre_pedagogique": 2,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DATA_ANL",
              "libelle": "Data Analysts, Business Analysts & Décideurs",
              "pertinence": "Essentiel"
            },
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 9,
          "code_bloc": "SQL-EXP-03",
          "titre_bloc": "Diagnostic des Plans d'Exécution (EXPLAIN ANALYZE)",
          "duree_heures": 3.5,
          "badge_technique": "EXPLAIN Diagnostic",
          "objectif_operationnel": "Décortiquer les plans d'exécution, repérer les Seq Scans superflus et analyser la consommation de buffers I/O.",
          "ordre_pedagogique": 3,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [
            {
              "id_module": 5,
              "titre_module": "Décorticage de l'Arbre EXPLAIN ANALYZE",
              "theorie_notions": "Interprétation des nœuds d'exécution : Seq Scan, Index Scan, Bitmap Index Scan, Nested Loop, Hash Join. Métriques de coût et temps réel.",
              "atelier_lab": "Lab #1 : Diagnostic d'une requête lente (5,2 s) sur un volume de 4 millions d'enregistrements. Identification de la conversion implicite destructrice.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 6,
              "titre_module": "Audit de la Consommation Mémoire & Buffers I/O",
              "theorie_notions": "Lecture des buffers partagés (Shared Hit / Read / Dirtied), impact du paramètre work_mem sur les tris disque (External Sort).",
              "atelier_lab": "Lab #2 : Optimisation d'un tri volumineux pour basculer de Disk Sort à Memory Sort (QuickSort), divisant le temps de réponse par 30.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 10,
          "code_bloc": "SQL-IDX-04",
          "titre_bloc": "Indexation Stratégique B-Tree & Index Couvrants",
          "duree_heures": 3.5,
          "badge_technique": "Index Tuning",
          "objectif_operationnel": "Concevoir des index composites sélectifs, partiels et couvrants (INCLUDE) pour réduire les temps de requête.",
          "ordre_pedagogique": 4,
          "niveau_code": "EXPT",
          "niveau_libelle": "Expert / Architecte",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 11,
          "code_bloc": "SQL-TXN-05",
          "titre_bloc": "Transactions ACID, Modèle MVCC & Résolution des Deadlocks",
          "duree_heures": 3.5,
          "badge_technique": "ACID & Concurrence",
          "objectif_operationnel": "Gérer les niveaux d'isolation, comprendre le multi-versioning MVCC et désamorcer les blocages concurrents.",
          "ordre_pedagogique": 5,
          "niveau_code": "EXPT",
          "niveau_libelle": "Expert / Architecte",
          "modules": [],
          "profils_cibles": [
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        }
      ]
    },
    {
      "id_filiere": 4,
      "code": "EXC",
      "libelle": "Microsoft Excel Avancé & Modélisation Financière",
      "description": "Tableaux de bord exécutifs, automatisation ETL avec Power Query, formules matricielles dynamiques (LAMBDA, XLOOKUP) et modélisation financière.",
      "icone": "fa-file-excel",
      "blocs": [
        {
          "id_bloc": 16,
          "code_bloc": "EXC-ETL-01",
          "titre_bloc": "Power Query pour Excel : Automatisation des Imports Mensuels",
          "duree_heures": 3.5,
          "badge_technique": "Power Query Excel",
          "objectif_operationnel": "Remplacer les copier-coller manuels par un rafraîchissement en un clic de fichiers multi-dossiers.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [],
          "profils_cibles": []
        },
        {
          "id_bloc": 17,
          "code_bloc": "EXC-MAT-02",
          "titre_bloc": "Formules Matricielles Dynamiques & Nouvelles Fonctions",
          "duree_heures": 3.5,
          "badge_technique": "Matrices Dynamiques",
          "objectif_operationnel": "Maîtriser XLOOKUP, FILTER, UNIQUE, SORT, CHOOSEROWS et créer des fonctions sur-mesure avec LAMBDA.",
          "ordre_pedagogique": 2,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [],
          "profils_cibles": []
        }
      ]
    },
    {
      "id_filiere": 5,
      "code": "LNX",
      "libelle": "Unix / Linux, Shell & Administration Systèmes",
      "description": "Administration des serveurs d'entreprise (RHEL, Debian/Ubuntu), automatisation Bash avancée, gestion fine des processus et sécurité réseau.",
      "icone": "fa-terminal",
      "blocs": [
        {
          "id_bloc": 18,
          "code_bloc": "LNX-ADM-01",
          "titre_bloc": "Gestion des Droits Avancés, ACLs & Sécurité Système",
          "duree_heures": 3.5,
          "badge_technique": "Droits & ACL Linux",
          "objectif_operationnel": "Configurer les permissions Unix standard, les attributs spéciaux (SUID/SGID/Sticky) et les ACLs POSIX.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [],
          "profils_cibles": []
        },
        {
          "id_bloc": 19,
          "code_bloc": "LNX-BSH-02",
          "titre_bloc": "Scripting Bash Professionnel & Robustesse Opérationnelle",
          "duree_heures": 3.5,
          "badge_technique": "Bash Robuste",
          "objectif_operationnel": "Écrire des scripts d'automatisation fiables avec gestion stricte d'erreurs (set -euo pipefail), logs et traps.",
          "ordre_pedagogique": 2,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [],
          "profils_cibles": []
        }
      ]
    },
    {
      "id_filiere": 6,
      "code": "AGL",
      "libelle": "Scrum Master, Agilité Opérationnelle & Product Ownership",
      "description": "Guide Scrum 2020, posture de Servant Leader, facilitation des rituels, élimination des impédiments, maîtrise de la vélocité et préparation certifiante.",
      "icone": "fa-sync-alt",
      "blocs": [
        {
          "id_bloc": 20,
          "code_bloc": "AGL-SM-01",
          "titre_bloc": "Cadre Scrum 2020 & Posture de Servant Leader du Scrum Master",
          "duree_heures": 3.5,
          "badge_technique": "Scrum Master & Équipe",
          "objectif_operationnel": "Incarner le Servant Leadership, animer les 4 rituels sans dérive, éliminer les impédiments et faire respecter la DoD.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [
            {
              "id_module": 9,
              "titre_module": "Facilitation des 4 Rituels & Posture Servant Leader",
              "theorie_notions": "Sprint Planning, Daily 15 min, Sprint Review collaborative et Rétrospective sécurisée (Directive de Kerth).",
              "atelier_lab": "Lab #1 : Simulation d'un Daily Scrum sous tension et animation d'une rétrospective avec plan d'action SMART.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 10,
              "titre_module": "Garantie de la Definition of Done & Dette Technique",
              "theorie_notions": "Critères non négociables de la DoD, détection du mini-cycle en V sur Burndown Chart et gestion des refactorings.",
              "atelier_lab": "Lab #2 : Diagnostic d'une dérive de vélocité sur Burndown et mise en place d'une DoD d'entreprise rigoureuse.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "MGR_PROJ",
              "libelle": "Chefs de Projet Digitaux & Product Owners",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 21,
          "code_bloc": "AGL-PO-02",
          "titre_bloc": "Ingénierie du Product Backlog, Découpage INVEST & Priorisation",
          "duree_heures": 3.5,
          "badge_technique": "Product Ownership",
          "objectif_operationnel": "Décliner la vision produit en User Stories INVEST, animer le Backlog Refinement et prioriser par la valeur.",
          "ordre_pedagogique": 2,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [],
          "profils_cibles": [
            {
              "code": "MGR_PROJ",
              "libelle": "Chefs de Projet Digitaux & Product Owners",
              "pertinence": "Essentiel"
            }
          ]
        }
      ]
    },
    {
      "id_filiere": 7,
      "code": "GHC",
      "libelle": "Développement Augmenté par l'IA : GitHub Copilot dans VS Code",
      "description": "Productivité développeur maximale dans VS Code : Ghost Text, modes Ask, Edit, Agent, génération de tests unitaires et Custom Instructions.",
      "icone": "fab fa-github",
      "blocs": [
        {
          "id_bloc": 22,
          "code_bloc": "GHC-VSC-01",
          "titre_bloc": "GitHub Copilot dans VS Code : Ghost Text, Modes Ask & Edit",
          "duree_heures": 3.5,
          "badge_technique": "VS Code & IA",
          "objectif_operationnel": "Maximiser la vélocité développeur : complétion multi-lignes, inline prompts, participants @workspace et commandes /fix.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [
            {
              "id_module": 11,
              "titre_module": "Gouvernance Sécurisée & Modes de Chat VS Code",
              "theorie_notions": "Public Code Matching, .copilotignore, @workspace, @terminal et commandes /explain et /fix.",
              "atelier_lab": "Lab #1 : Audit de code legacy avec @workspace et correction assistée d'un bug de concurrence.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 23,
          "code_bloc": "GHC-TST-02",
          "titre_bloc": "Automatisation des Tests Unitaires & Custom Instructions (.github)",
          "duree_heures": 3.5,
          "badge_technique": "Tests & Gouvernance",
          "objectif_operationnel": "Générer des suites de tests unitaires (/tests), mocker les dépendances et standardiser les règles d'équipe via copilot-instructions.md.",
          "ordre_pedagogique": 2,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [
            {
              "id_module": 12,
              "titre_module": "Automatisation des Tests & Custom Instructions",
              "theorie_notions": "Génération de tests unitaires via /tests, mocks d'API REST et rédaction de .github/copilot-instructions.md.",
              "atelier_lab": "Lab #2 : Couverture de tests à 90% sur module critique et standardisation des conventions de l'équipe.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Essentiel"
            }
          ]
        }
      ]
    },
    {
      "id_filiere": 8,
      "code": "SDK",
      "libelle": "Orchestration Multi-Agents & Copilot SDK (MCP)",
      "description": "Architecture applicative d'agents autonomes, Model Context Protocol (MCP) et intégration de serveurs d'outils distribués.",
      "icone": "fa-network-wired",
      "blocs": []
    },
    {
      "id_filiere": 9,
      "code": "MSP",
      "libelle": "MS Project & Pilotage Opérationnel de Projets",
      "description": "Structure WBS, planification de chemin critique (CPM), nivellement de charges et suivi rigoureux des dérives de coûts et délais.",
      "icone": "fa-tasks",
      "blocs": []
    },
    {
      "id_filiere": 10,
      "code": "ALG",
      "libelle": "Algorithmique & Structures de Données",
      "description": "Pensée computationnelle, complexité spatio-temporelle (Big O), piles, files, arbres, graphes et programmation dynamique.",
      "icone": "fa-code",
      "blocs": []
    },
    {
      "id_filiere": 11,
      "code": "HYB",
      "libelle": "Cursus Hybride Multi-Technologies",
      "description": "Bâtissez un programme sur-mesure combinant plusieurs technologies complémentaires (Power BI, Excel, SQL, Linux, Agents IA).",
      "icone": "fa-cubes",
      "blocs": []
    },
    {
      "id_filiere": 12,
      "code": "GEN",
      "libelle": "Grand Diagnostic BenchTech : Architecture Data, SQL, BI & IA",
      "description": "Évaluation globale de positionnement technique sur 10 cas pratiques réels d'ingénierie et d'architecture.",
      "icone": "fa-star",
      "blocs": []
    },
    {
      "id_filiere": 13,
      "code": "CLD",
      "libelle": "Cloud Computing, Conteneurs & Ingénierie DevOps",
      "description": "Architectures Cloud résilientes, conteneurisation Docker, orchestration Kubernetes, Infrastructure as Code avec Terraform, pipelines CI/CD automatisés et observabilité SRE.",
      "icone": "fa-cloud",
      "blocs": [
        {
          "id_bloc": 24,
          "code_bloc": "CLD-DCK-01",
          "titre_bloc": "Conteneurisation d'Applications avec Docker & Registries Privés",
          "duree_heures": 3.5,
          "badge_technique": "Docker & Conteneurs",
          "objectif_operationnel": "Concevoir des images Docker multi-stage légères et sécurisées, isoler les réseaux de conteneurs et publier sur des registres d'entreprise sécurisés.",
          "ordre_pedagogique": 1,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [
            {
              "id_module": 13,
              "titre_module": "Architecture Docker Engine & Multi-Stage Builds Haute Performance",
              "theorie_notions": "Namespaces Linux, cgroups, UnionFS, couches d'images, principes de réduction de surface d'attaque (images Alpine/Distroless), isolation utilisateur non-root.",
              "atelier_lab": "Lab #1 : Réduction d'une image Docker Java/Node.js de 1,2 Go à 85 Mo via multi-stage builds et élimination complète des vulnérabilités critiques de build.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 14,
              "titre_module": "Volumes Persistants, Réseaux Bridge & Multi-Conteneurs Docker Compose",
              "theorie_notions": "Drivers de stockage (bind mounts vs volumes managés), réseaux bridge utilisateurs avec DNS interne, variables d'environnement et secrets Docker.",
              "atelier_lab": "Lab #2 : Orchestration locale d'une architecture 3-tiers (Web frontend, API backend et base PostgreSQL persistante) avec healthchecks et redémarrage automatique.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 25,
          "code_bloc": "CLD-K8S-02",
          "titre_bloc": "Orchestration & Déploiement Résilient avec Kubernetes (K8s)",
          "duree_heures": 3.5,
          "badge_technique": "Kubernetes Core",
          "objectif_operationnel": "Déployer des workloads conteneurisés en haute disponibilité, gérer les stratégies de Rolling Updates, l'Ingress Controller et le stockage persistant.",
          "ordre_pedagogique": 2,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [
            {
              "id_module": 15,
              "titre_module": "Architecture Control Plane & Primitives de Workloads K8s",
              "theorie_notions": "Rôles de kube-apiserver, etcd, kube-scheduler, kubelet et kube-proxy. Déclarations YAML des Pods, Deployments, ReplicaSets et Namespaces.",
              "atelier_lab": "Lab #1 : Déploiement d'un cluster d'API microservices avec zéro temps d'arrêt (Zero Downtime Rolling Update) et retour arrière instantané (Rollback).",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 16,
              "titre_module": "Services Networking, Ingress Nginx & Gestion Sécurisée des Secrets",
              "theorie_notions": "Différences entre ClusterIP, NodePort, LoadBalancer et Ingress Nginx. Injection sécurisée de ConfigMaps et Secrets chiffrés en base.",
              "atelier_lab": "Lab #2 : Exposition externe sécurisée par TLS/HTTPS via Ingress Controller et routage par nom d'hôte avec sondes livenessProbe et readinessProbe.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 26,
          "code_bloc": "CLD-IAC-03",
          "titre_bloc": "Infrastructure as Code (IaC) avec Terraform & Multi-Cloud",
          "duree_heures": 3.5,
          "badge_technique": "Terraform IaC",
          "objectif_operationnel": "Provisionner et versionner des infrastructures Cloud souveraines (Azure, AWS ou OpenStack) de façon reproductible, modulaire et sans dérive.",
          "ordre_pedagogique": 3,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [
            {
              "id_module": 17,
              "titre_module": "Syntaxe HCL, State Management & Verrouillage Concurrentiel",
              "theorie_notions": "Cycle de vie Terraform (init, plan, apply, destroy), gestion du fichier terraform.tfstate, remote backend sécurisé (S3/Azure Blob) avec verrouillage de lock concurrent.",
              "atelier_lab": "Lab #1 : Initialisation d'un backend distant sécurisé et provisionnement automatisé d'un Virtual Private Cloud (VPC/VNet) avec sous-réseaux privés/publics.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 18,
              "titre_module": "Modules Réutilisables, Variables & Détection des Dérives (Drift)",
              "theorie_notions": "Conception de modules Terraform d'entreprise réutilisables, gestion des environnements (Dev/Staging/Prod) et détection des dérives d'infrastructure (Drift Detection).",
              "atelier_lab": "Lab #2 : Création d'un module d'infrastructure complet déployant une flotte de VMs managées derrière un équilibreur de charge avec alertes de drift.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 27,
          "code_bloc": "CLD-CICD-04",
          "titre_bloc": "Pipelines CI/CD & Automatisation des Déploiements (GitHub Actions / GitLab)",
          "duree_heures": 3.5,
          "badge_technique": "CI/CD Automation",
          "objectif_operationnel": "Automatiser les tests unitaires, l'analyse statique de code, le packaging d'artéfacts et la livraison continue vers les environnements de staging et production.",
          "ordre_pedagogique": 4,
          "niveau_code": "OPER",
          "niveau_libelle": "Opérationnel / Intermédiaire",
          "modules": [
            {
              "id_module": 19,
              "titre_module": "Fondations CI/CD, Runners & Stratégies de Triggers Git",
              "theorie_notions": "Événements Git (push, pull request, tag release), runners hébergés vs self-hosted sécurisés, mise en cache intelligente des dépendances.",
              "atelier_lab": "Lab #1 : Construction d'un pipeline complet exécutant tests unitaires, linter de code, build de conteneur et publication automatique sur registre privé.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 20,
              "titre_module": "Déploiement Continu (CD), Approbations Manuelles & Blue/Green",
              "theorie_notions": "Environnements protégés avec approbation requise des pairs, stratégies de déploiement Blue/Green et Canary Releases, gestion des secrets d'environnement.",
              "atelier_lab": "Lab #2 : Pipeline CD automatisant le déploiement sur un cluster Kubernetes avec mise à jour automatique des manifestes et notification d'équipe en cas d'échec.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 28,
          "code_bloc": "CLD-OBS-05",
          "titre_bloc": "Observabilité, Monitoring & Métriques (Prometheus & Grafana)",
          "duree_heures": 3.5,
          "badge_technique": "Observabilité SRE",
          "objectif_operationnel": "Instrumenter les clusters et applications, collecter les métriques RED/USE en temps réel, concevoir des tableaux de bord Grafana et router les alertes critiques.",
          "ordre_pedagogique": 5,
          "niveau_code": "AVAN",
          "niveau_libelle": "Avancé / Perfectionnement",
          "modules": [
            {
              "id_module": 21,
              "titre_module": "Collecte de Métriques Time-Series avec Prometheus & Exporters",
              "theorie_notions": "Modèle de collecte pull vs push, métriques RED (Rate, Errors, Duration) et USE (Utilization, Saturation, Errors), Node Exporter et Kube-State-Metrics.",
              "atelier_lab": "Lab #1 : Déploiement de la pile Prometheus sur un cluster, écriture de requêtes PromQL avancées (taux d'erreur 5xx, utilisation CPU/RAM moyenne sur 5m).",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 22,
              "titre_module": "Visualisation Grafana, SLI/SLO & Alertmanager",
              "theorie_notions": "Conception de dashboards exécutifs Grafana, définition des indicateurs de niveau de service (SLI/SLO) et configuration des règles d'alerting intelligentes.",
              "atelier_lab": "Lab #2 : Conception d'un dashboard de production en direct avec déclenchement automatique d'alerte Alertmanager lors du dépassement du seuil critique.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        },
        {
          "id_bloc": 29,
          "code_bloc": "CLD-SEC-06",
          "titre_bloc": "DevSecOps : Sécurisation du Cycle CI/CD & Scan de Vulnérabilités",
          "duree_heures": 3.5,
          "badge_technique": "DevSecOps",
          "objectif_operationnel": "Intégrer les contrôles de sécurité Shift-Left (SAST, SCA, scan de conteneurs Trivy) et verrouiller les politiques d'admission Kubernetes avec OPA Gatekeeper.",
          "ordre_pedagogique": 6,
          "niveau_code": "EXPT",
          "niveau_libelle": "Expert / Architecte",
          "modules": [
            {
              "id_module": 23,
              "titre_module": "Shift-Left Security : Analyse SAST & Scan d'Images Conteneurs",
              "theorie_notions": "Détection statique des failles de code (SAST), analyse des composants tiers et CVEs (SCA), détection des secrets hardcodés (Gitleaks) et scan d'images avec Trivy.",
              "atelier_lab": "Lab #1 : Blocage automatique d'un pipeline CI/CD dès détection d'une CVE critique (CVSS > 8.0) dans une image de base ou d'un secret leaké dans un commit.",
              "duree_minutes": 105,
              "ordre_affichage": 1
            },
            {
              "id_module": 24,
              "titre_module": "Politiques de Sécurité Runtime & Contrôleur d'Admission K8s",
              "theorie_notions": "Sécurité du runtime conteneur, profils Seccomp/AppArmor, Kubernetes Pod Security Standards (Restricted) et admission controller avec Open Policy Agent (OPA).",
              "atelier_lab": "Lab #2 : Déploiement d'une règle de gouvernance OPA interdisant formellement l'exécution de conteneurs en mode 'privileged' ou avec l'UID 0 (root) sur l'ensemble du cluster.",
              "duree_minutes": 105,
              "ordre_affichage": 2
            }
          ],
          "profils_cibles": [
            {
              "code": "DEV_BACK",
              "libelle": "Développeurs Backend & Ingénieurs Données",
              "pertinence": "Recommandé"
            },
            {
              "code": "DBA_SYS",
              "libelle": "DBAs, Administrateurs Systèmes & DevOps",
              "pertinence": "Essentiel"
            }
          ]
        }
      ]
    }
  ],
  "niveaux": [
    {
      "id_niveau": 1,
      "code": "FOND",
      "libelle": "Fondamentaux / Prise en main",
      "description": "Acquisition des bases solides, vocabulaire et premiers cas d'usage.",
      "ordre_hierarchique": 1
    },
    {
      "id_niveau": 2,
      "code": "OPER",
      "libelle": "Opérationnel / Intermédiaire",
      "description": "Autonomie sur les tâches courantes, automatisation et bonnes pratiques métiers.",
      "ordre_hierarchique": 2
    },
    {
      "id_niveau": 3,
      "code": "AVAN",
      "libelle": "Avancé / Perfectionnement",
      "description": "Cas complexes, résolution de goulots d'étranglement et ingénierie avancée.",
      "ordre_hierarchique": 3
    },
    {
      "id_niveau": 4,
      "code": "EXPT",
      "libelle": "Expert / Architecte",
      "description": "Design d'architecture, scalabilité, gouvernance d'entreprise et tuning extrême.",
      "ordre_hierarchique": 4
    }
  ],
  "profils": [
    {
      "id_profil": 1,
      "code": "CTRL_GEST",
      "libelle": "Contrôleurs de Gestion, DAF & Directeurs Financiers",
      "prerequis_recommandes": "Pratique régulière d'Excel, notions de comptabilité analytique ou financière."
    },
    {
      "id_profil": 2,
      "code": "DATA_ANL",
      "libelle": "Data Analysts, Business Analysts & Décideurs",
      "prerequis_recommandes": "Aisance avec la manipulation de données chiffrées et les indicateurs KPI."
    },
    {
      "id_profil": 3,
      "code": "DEV_BACK",
      "libelle": "Développeurs Backend & Ingénieurs Données",
      "prerequis_recommandes": "Bases de programmation (Python, Java, C# ou PHP) et requêtage SQL standard."
    },
    {
      "id_profil": 4,
      "code": "DBA_SYS",
      "libelle": "DBAs, Administrateurs Systèmes & DevOps",
      "prerequis_recommandes": "Connaissance de base de l'environnement système (Linux ou Windows Server)."
    },
    {
      "id_profil": 5,
      "code": "MGR_PROJ",
      "libelle": "Chefs de Projet Digitaux & Product Owners",
      "prerequis_recommandes": "Conduite de projets informatiques ou organisationnels, compréhension des besoins métiers."
    }
  ]
};
