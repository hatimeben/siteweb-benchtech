-- =======================================================================
-- BENCHTECH - JEU DE DONNÉES D'INITIALISATION (SEED DATA)
-- Fichier : database/seed.sql
-- =======================================================================

PRAGMA foreign_keys = ON;

-- -----------------------------------------------------------------------
-- 1. INSERTION DES THÉMATIQUES / FILIÈRES (TABLE UNIFIÉE thematiques)
-- -----------------------------------------------------------------------
INSERT INTO thematiques (id_thematique, code, code_filiere, titre, description, icone, source_standard, id_parent) VALUES
(1, 'powerbi', 'PBI', 'Microsoft Power BI & Data Analytics', 
    'Ingénierie décisionnelle, modélisation en étoile, langage DAX avancé, optimisation VertiPaq et gouvernance Power BI Service.', 'fa-chart-pie', 'Microsoft PL-300 & The Definitive Guide to DAX', NULL),

(2, 'copilot', 'COP', 'Microsoft Copilot Studio & Agents IA d''Entreprise', 
    'Conception d''agents autonomes, orchestration de prompts génératifs, intégration RAG sécurisée et connecteurs Power Platform.', 'fa-robot', 'Microsoft Copilot Studio Architecture & Governance', NULL),

(3, 'sql', 'SQL', 'SQL Avancé, Optimisation SGBD & PostgreSQL', 
    'Modélisation relationnelle 3NF, requêtes analytiques (Window Functions), lecture EXPLAIN ANALYZE et indexation B-Tree haute performance.', 'fa-database', 'Standards ANSI SQL:2016 & PostgreSQL Internals', NULL),

(4, 'excel', 'EXC', 'Microsoft Excel Avancé & Modélisation Financière', 
    'Tableaux de bord exécutifs, automatisation ETL avec Power Query, formules matricielles dynamiques (LAMBDA, XLOOKUP) et modélisation financière.', 'fa-file-excel', 'Microsoft 365 Dynamic Arrays & ETL Methodology', NULL),

(5, 'unix', 'LNX', 'Unix / Linux, Shell & Administration Systèmes', 
    'Administration des serveurs d''entreprise (RHEL, Debian/Ubuntu), automatisation Bash avancée, gestion fine des processus et sécurité réseau.', 'fa-terminal', 'POSIX.1-2017 & Red Hat Enterprise Linux 9', NULL),

(6, 'scrum', 'AGL', 'Scrum Master, Agilité Opérationnelle & Product Ownership', 
    'Guide Scrum 2020, posture de Servant Leader, facilitation des rituels, élimination des impédiments, maîtrise de la vélocité et préparation certifiante.', 'fa-sync-alt', 'Guide Scrum Officiel 2020 & PSM I / PSM II', NULL),

(7, 'github-copilot', 'GHC', 'Développement Augmenté par l''IA : GitHub Copilot dans VS Code', 
    'Productivité développeur maximale dans VS Code : Ghost Text, modes Ask, Edit, Agent, génération de tests unitaires et Custom Instructions.', 'fab fa-github', 'GitHub Copilot Enterprise Standards 2026', 2),

(8, 'copilot-sdk', 'SDK', 'Orchestration Multi-Agents & Copilot SDK (MCP)', 
    'Architecture applicative d''agents autonomes, Model Context Protocol (MCP) et intégration de serveurs d''outils distribués.', 'fa-network-wired', 'Model Context Protocol (Anthropic) & Semantic Kernel', 2),

(9, 'msproject', 'MSP', 'MS Project & Pilotage Opérationnel de Projets', 
    'Structure WBS, planification de chemin critique (CPM), nivellement de charges et suivi rigoureux des dérives de coûts et délais.', 'fa-tasks', 'Project Management Body of Knowledge (PMBOK)', NULL),

(10, 'algo', 'ALG', 'Algorithmique & Structures de Données', 
    'Pensée computationnelle, complexité spatio-temporelle (Big O), piles, files, arbres, graphes et programmation dynamique.', 'fa-code', 'Introduction to Algorithms (Cormen / MIT Press)', NULL),

(11, 'hybrid', 'HYB', 'Cursus Hybride Multi-Technologies', 
    'Bâtissez un programme sur-mesure combinant plusieurs technologies complémentaires (Power BI, Excel, SQL, Linux, Agents IA).', 'fa-cubes', 'Ingénierie Pédagogique Transverse BenchTech', NULL),

(12, 'general', 'GEN', 'Grand Diagnostic BenchTech : Architecture Data, SQL, BI & IA', 
    'Évaluation globale de positionnement technique sur 10 cas pratiques réels d''ingénierie et d''architecture.', 'fa-star', 'Standards Internationaux ANSI SQL, Fabric & M365', NULL);

-- -----------------------------------------------------------------------
-- 2. INSERTION DES NIVEAUX DE COMPÉTENCE
-- -----------------------------------------------------------------------
INSERT INTO niveaux (id_niveau, code, libelle, description, ordre_hierarchique) VALUES
(1, 'FOND', 'Fondamentaux / Prise en main', 'Acquisition des bases solides, vocabulaire et premiers cas d''usage.', 1),
(2, 'OPER', 'Opérationnel / Intermédiaire', 'Autonomie sur les tâches courantes, automatisation et bonnes pratiques métiers.', 2),
(3, 'AVAN', 'Avancé / Perfectionnement', 'Cas complexes, résolution de goulots d''étranglement et ingénierie avancée.', 3),
(4, 'EXPT', 'Expert / Architecte', 'Design d''architecture, scalabilité, gouvernance d''entreprise et tuning extrême.', 4);

-- -----------------------------------------------------------------------
-- 3. INSERTION DES PROFILS CIBLES PARTICIPANTS
-- -----------------------------------------------------------------------
INSERT INTO profils_participants (id_profil, code, libelle, prerequis_recommandes) VALUES
(1, 'CTRL_GEST', 'Contrôleurs de Gestion, DAF & Directeurs Financiers', 'Pratique régulière d''Excel, notions de comptabilité analytique ou financière.'),
(2, 'DATA_ANL', 'Data Analysts, Business Analysts & Décideurs', 'Aisance avec la manipulation de données chiffrées et les indicateurs KPI.'),
(3, 'DEV_BACK', 'Développeurs Backend & Ingénieurs Données', 'Bases de programmation (Python, Java, C# ou PHP) et requêtage SQL standard.'),
(4, 'DBA_SYS', 'DBAs, Administrateurs Systèmes & DevOps', 'Connaissance de base de l''environnement système (Linux ou Windows Server).'),
(5, 'MGR_PROJ', 'Chefs de Projet Digitaux & Product Owners', 'Conduite de projets informatiques ou organisationnels, compréhension des besoins métiers.');

-- -----------------------------------------------------------------------
-- 4. INSERTION DES BLOCS DE COMPÉTENCES (ÉCHANTILLON COMPLET RÉEL)
-- -----------------------------------------------------------------------
INSERT INTO blocs_competences (id_bloc, code_bloc, titre_bloc, id_thematique, id_filiere, id_niveau, duree_heures, badge_technique, objectif_operationnel, ordre_pedagogique) VALUES
-- Power BI (id_thematique = 1)
(1, 'PBI-ETL-01', 'Ingestion Multi-Sources & Préparation Power Query', 1, 1, 2, 3.5, 'Power Query ETL', 
    'Nettoyer, transformer et fusionner des sources hétérogènes (Excel, SQL, CSV) en modèles propres sans code.', 1),

(2, 'PBI-MOD-02', 'Modélisation Dimensionnelle en Étoile (Star Schema)', 1, 1, 2, 3.5, 'Modélisation Kimball', 
    'Structurer tables de faits et de dimensions, résoudre les relations plusieurs-à-plusieurs et optimiser le schéma.', 2),

(3, 'PBI-DAX-03', 'Fondations DAX & Transition de Contexte (CALCULATE)', 1, 1, 3, 3.5, 'DAX Moteur', 
    'Maîtriser les contextes de ligne et de filtre, le mécanisme CALCULATE et les modificateurs ALL/ALLEXCEPT.', 3),

(4, 'PBI-TIM-04', 'DAX Temporel (Time Intelligence) & Analyses Comparatives', 1, 1, 3, 3.5, 'Time Intelligence', 
    'Calculer les cumuls YTD/QTD, les écarts annuels YoY et les fenêtres glissantes dynamiques.', 4),

(5, 'PBI-OPT-05', 'Optimisation Moteur VertiPaq & Réduction Mémoire', 1, 1, 4, 3.5, 'Tuning VertiPaq', 
    'Diagnostiquer la cardinalité des colonnes avec DAX Studio et diviser l''empreinte RAM par 5.', 5),

(6, 'PBI-GOV-06', 'Sécurité à la Ligne (RLS) & Déploiement Power BI Service', 1, 1, 3, 3.5, 'Gouvernance & RLS', 
    'Cloisonner les données par profil utilisateur avec RLS dynamique et gérer les espaces de travail Fabric/Service.', 6),

-- SQL & SGBD (id_thematique = 3)
(7, 'SQL-MOD-01', 'Modélisation Relationnelle 3NF & Intégrité Référentielle', 3, 3, 2, 3.5, 'Conception 3NF', 
    'Normaliser un schéma transactionnel, définir les contraintes CHECK/FK et éliminer les anomalies de mise à jour.', 1),

(8, 'SQL-WIN-02', 'SQL Analytique Avancé & Window Functions (OVER / PARTITION)', 3, 3, 3, 3.5, 'Window Functions', 
    'Effectuer des calculs de rang (DENSE_RANK), totaux cumulés et décalages temporels (LEAD/LAG) sans jointures.', 2),

(9, 'SQL-EXP-03', 'Diagnostic des Plans d''Exécution (EXPLAIN ANALYZE)', 3, 3, 3, 3.5, 'EXPLAIN Diagnostic', 
    'Décortiquer les plans d''exécution, repérer les Seq Scans superflus et analyser la consommation de buffers I/O.', 3),

(10, 'SQL-IDX-04', 'Indexation Stratégique B-Tree & Index Couvrants', 3, 3, 4, 3.5, 'Index Tuning', 
    'Concevoir des index composites sélectifs, partiels et couvrants (INCLUDE) pour réduire les temps de requête.', 4),

(11, 'SQL-TXN-05', 'Transactions ACID, Modèle MVCC & Résolution des Deadlocks', 3, 3, 4, 3.5, 'ACID & Concurrence', 
    'Gérer les niveaux d''isolation, comprendre le multi-versioning MVCC et désamorcer les blocages concurrents.', 5),

-- Copilot Studio & IA (id_thematique = 2)
(12, 'COP-FND-01', 'Fondations & Architecture des Copilotes Métiers', 2, 2, 1, 3.5, 'Studio & Canaux', 
    'Créer un premier agent conversationnel, maîtriser les déclencheurs et publier sur Teams ou le Web.', 1),

(13, 'COP-RAG-02', 'Architecture RAG & Ancrage Sécurisé sur Données Entreprise', 2, 2, 2, 3.5, 'RAG d''Entreprise', 
    'Connecter l''agent à des sources documentaires (SharePoint, Dataverse) et paramétrer les filtres anti-hallucination.', 2),

(14, 'COP-ACT-03', 'Actions Avancées & Déclenchement de Flux Power Automate', 2, 2, 3, 3.5, 'Power Automate & API', 
    'Permettre à l''agent d''exécuter des actions réelles dans le SI (créer un ticket, interroger un CRM via REST API).', 3),

(15, 'COP-PRM-04', 'Prompt Engineering pour LLMs & Personnalisation de Ton', 2, 2, 2, 3.5, 'Prompt Engineering', 
    'Structurer des consignes système précises, variables contextuelles et règles de gouvernance pour l''agent.', 4),

-- Excel Avancé (id_thematique = 4)
(16, 'EXC-ETL-01', 'Power Query pour Excel : Automatisation des Imports Mensuels', 4, 4, 2, 3.5, 'Power Query Excel', 
    'Remplacer les copier-coller manuels par un rafraîchissement en un clic de fichiers multi-dossiers.', 1),

(17, 'EXC-MAT-02', 'Formules Matricielles Dynamiques & Nouvelles Fonctions', 4, 4, 3, 3.5, 'Matrices Dynamiques', 
    'Maîtriser XLOOKUP, FILTER, UNIQUE, SORT, CHOOSEROWS et créer des fonctions sur-mesure avec LAMBDA.', 2),

-- UNIX / Linux (id_thematique = 5)
(18, 'LNX-ADM-01', 'Gestion des Droits Avancés, ACLs & Sécurité Système', 5, 5, 2, 3.5, 'Droits & ACL Linux', 
    'Configurer les permissions Unix standard, les attributs spéciaux (SUID/SGID/Sticky) et les ACLs POSIX.', 1),

(19, 'LNX-BSH-02', 'Scripting Bash Professionnel & Robustesse Opérationnelle', 5, 5, 3, 3.5, 'Bash Robuste', 
    'Écrire des scripts d''automatisation fiables avec gestion stricte d''erreurs (set -euo pipefail), logs et traps.', 2),

-- Scrum & Agilité (id_thematique = 6)
(20, 'AGL-SM-01', 'Cadre Scrum 2020 & Posture de Servant Leader du Scrum Master', 6, 6, 2, 3.5, 'Scrum Master & Équipe', 
    'Incarner le Servant Leadership, animer les 4 rituels sans dérive, éliminer les impédiments et faire respecter la DoD.', 1),

(21, 'AGL-PO-02', 'Ingénierie du Product Backlog, Découpage INVEST & Priorisation', 6, 6, 2, 3.5, 'Product Ownership', 
    'Décliner la vision produit en User Stories INVEST, animer le Backlog Refinement et prioriser par la valeur.', 2),

-- GitHub Copilot dans VS Code (id_thematique = 7)
(22, 'GHC-VSC-01', 'GitHub Copilot dans VS Code : Ghost Text, Modes Ask & Edit', 7, 7, 2, 3.5, 'VS Code & IA', 
    'Maximiser la vélocité développeur : complétion multi-lignes, inline prompts, participants @workspace et commandes /fix.', 1),

(23, 'GHC-TST-02', 'Automatisation des Tests Unitaires & Custom Instructions (.github)', 7, 7, 3, 3.5, 'Tests & Gouvernance', 
    'Générer des suites de tests unitaires (/tests), mocker les dépendances et standardiser les règles d''équipe via copilot-instructions.md.', 2);

-- -----------------------------------------------------------------------
-- 5. INSERTION DES CONTENUS DÉTAILLÉS DES MODULES & LABS PRATIQUES
-- -----------------------------------------------------------------------
INSERT INTO contenus_modules (id_module, id_bloc, titre_module, theorie_notions, atelier_lab, duree_minutes, ordre_affichage) VALUES
-- Modules pour Bloc PBI-ETL-01
(1, 1, 'Connexions & Dépivotage de Structures Tabulaires', 
    'Types de connecteurs, isolation des étapes M, principes du dépivotage (Unpivot) vs Transposition.', 
    'Lab #1 : Récupérer 12 fichiers comptables mensuels éclatés, normaliser les colonnes dates/montants et consolider le tout en une table unique.', 105, 1),

(2, 1, 'Jointures Complexes & Gestion Robuste des Anomalies', 
    'Types de jointures dans Power Query (Left Outer, Anti-Join), typage des colonnes, traitement des valeurs nulles et erreurs d''ingestion.', 
    'Lab #2 : Détection automatique des lignes orphelines entre fichier des ventes et référentiel clients avant chargement dans le modèle.', 105, 2),

-- Modules pour Bloc PBI-DAX-03
(3, 3, 'Transition de Contexte & Fonction CALCULATE', 
    'Mécanisme interne de Context Transition. Différence entre contexte de ligne itéré et filtre global, modificateurs ALL, ALLEXCEPT, KEEPFILTERS.', 
    'Lab #1 : Audit d''un modèle financier avec totaux faussés en matrice croisée. Réécriture des mesures DAX avec maintien des filtres métiers.', 105, 1),

(4, 3, 'Calculs Relatifs & Pondérations Dynamiques', 
    'Fonctions itératives SUMX/AVERAGEX, calculs de parts de marché (%), quotients protégés avec DIVIDE et ratios contextuels.', 
    'Lab #2 : Conception d''une mesure dynamique affichant le % du chiffre d''affaires par rapport au sous-total de la catégorie et au total général.', 105, 2),

-- Modules pour Bloc SQL-EXP-03
(5, 9, 'Décorticage de l''Arbre EXPLAIN ANALYZE', 
    'Interprétation des nœuds d''exécution : Seq Scan, Index Scan, Bitmap Index Scan, Nested Loop, Hash Join. Métriques de coût et temps réel.', 
    'Lab #1 : Diagnostic d''une requête lente (5,2 s) sur un volume de 4 millions d''enregistrements. Identification de la conversion implicite destructrice.', 105, 1),

(6, 9, 'Audit de la Consommation Mémoire & Buffers I/O', 
    'Lecture des buffers partagés (Shared Hit / Read / Dirtied), impact du paramètre work_mem sur les tris disque (External Sort).', 
    'Lab #2 : Optimisation d''un tri volumineux pour basculer de Disk Sort à Memory Sort (QuickSort), divisant le temps de réponse par 30.', 105, 2),

-- Modules pour Bloc COP-RAG-02
(7, 13, 'Indexation Sémantique & Ancrage Documentaire', 
    'Fonctionnement du chunking de documents PDF/Word, génération des embeddings et calcul de proximité vectorielle (similarité cosinus).', 
    'Lab #1 : Indexation d''une base de procédures internes RH (50 pages) et validation de la fidélité des citations de sources générées par l''agent.', 105, 1),

(8, 13, 'Garde-Fous, Confidentialité & Modération', 
    'Configuration du niveau de température, filtrage des sujets sensibles, blocage des injections de prompts et conformité d''accès aux données.', 
    'Lab #2 : Test d''intrusion par invite (Prompt Injection) pour éprouver la résistance de l''agent et verrouiller les réponses aux seules sources autorisées.', 105, 2),

-- Modules pour Bloc AGL-SM-01
(9, 20, 'Facilitation des 4 Rituels & Posture Servant Leader', 
    'Sprint Planning, Daily 15 min, Sprint Review collaborative et Rétrospective sécurisée (Directive de Kerth).', 
    'Lab #1 : Simulation d''un Daily Scrum sous tension et animation d''une rétrospective avec plan d''action SMART.', 105, 1),

(10, 20, 'Garantie de la Definition of Done & Dette Technique', 
    'Critères non négociables de la DoD, détection du mini-cycle en V sur Burndown Chart et gestion des refactorings.', 
    'Lab #2 : Diagnostic d''une dérive de vélocité sur Burndown et mise en place d''une DoD d''entreprise rigoureuse.', 105, 2),

-- Modules pour Bloc GHC-VSC-01
(11, 22, 'Gouvernance Sécurisée & Modes de Chat VS Code', 
    'Public Code Matching, .copilotignore, @workspace, @terminal et commandes /explain et /fix.', 
    'Lab #1 : Audit de code legacy avec @workspace et correction assistée d''un bug de concurrence.', 105, 1),

(12, 23, 'Automatisation des Tests & Custom Instructions', 
    'Génération de tests unitaires via /tests, mocks d''API REST et rédaction de .github/copilot-instructions.md.', 
    'Lab #2 : Couverture de tests à 90% sur module critique et standardisation des conventions de l''équipe.', 105, 2);

-- -----------------------------------------------------------------------
-- 6. LIAISONS BLOCS <-> PROFILS CIBLES (TABLE bloc_profils)
-- -----------------------------------------------------------------------
INSERT INTO bloc_profils (id_bloc, id_profil, pertinence) VALUES
-- Power BI DAX & ETL -> Contrôleurs de gestion & Data Analysts
(1, 1, 'Essentiel'),
(1, 2, 'Essentiel'),
(2, 1, 'Essentiel'),
(2, 2, 'Essentiel'),
(3, 1, 'Essentiel'),
(3, 2, 'Essentiel'),
(4, 1, 'Essentiel'),
(4, 2, 'Essentiel'),
(5, 2, 'Essentiel'),
(5, 3, 'Recommandé'),

-- SQL Avancé & Tuning -> Développeurs Backend & DBAs
(7, 3, 'Essentiel'),
(7, 4, 'Essentiel'),
(8, 2, 'Essentiel'),
(8, 3, 'Essentiel'),
(9, 3, 'Essentiel'),
(9, 4, 'Essentiel'),
(10, 3, 'Essentiel'),
(10, 4, 'Essentiel'),
(11, 4, 'Essentiel'),

-- Copilot Studio -> Data Analysts, Développeurs, Chefs de Projet
(12, 5, 'Essentiel'),
(12, 2, 'Recommandé'),
(13, 3, 'Essentiel'),
(13, 5, 'Recommandé'),
(14, 3, 'Essentiel'),

-- Scrum Master & Agilité -> Chefs de projet, Tech Leads
(20, 5, 'Essentiel'),
(21, 5, 'Essentiel'),

-- GitHub Copilot -> Développeurs Backend & Tech Leads
(22, 3, 'Essentiel'),
(23, 3, 'Essentiel');

-- -----------------------------------------------------------------------
-- 7. EXEMPLE RÉEL DE DOSSIER DE FORMATION SUR-MESURE (DEMANDE CLIENT)
-- -----------------------------------------------------------------------
INSERT INTO demandes_sur_mesure (
    id_demande, reference_dossier, nom_entreprise, departement_service, 
    contact_nom, contact_email, contact_telephone, format_animation, 
    orientation_prioritaire, rythme_envisage, effectif_estime, 
    volume_horaire_total, statut_demande, commentaires_cadrage
) VALUES (
    1,
    'BT-PROG-2026-X89B',
    'Groupe Industriel Marocain',
    'Direction du Contrôle de Gestion & SI',
    'M. Amine El Fassi',
    'a.elfassi@groupe-marocain.ma',
    '+212 6 61 00 00 00',
    'Présentiel Intra',
    'Cas d''usage métiers concrets & Dashboards de pilotage',
    'Journées consécutives immersives (2 jours)',
    8,
    14.0,
    'Dossier Émis',
    'Programme calibré pour automatiser les reporting mensuels et fiabiliser les calculs de rentabilité en DAX.'
);

-- Blocs retenus pour ce dossier client (4 blocs = 14h)
INSERT INTO demande_blocs (id_demande, id_bloc, position_sequence) VALUES
(1, 1, 1), -- Ingestion Power Query (3.5h)
(1, 2, 2), -- Modélisation Étoile (3.5h)
(1, 3, 3), -- Fondations DAX (3.5h)
(1, 4, 4); -- Time Intelligence (3.5h)
