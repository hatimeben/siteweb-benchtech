/**
 * BenchTech Academy - Banque de Questions Dynamique
 * Thématique : Cloud Computing, Conteneurs & Ingénierie DevOps
 * Généré automatiquement depuis benchtech_formations.db (Pool de 40 questions)
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
        "id": "cloud-devops",
        "title": "Cloud Computing, Conteneurs & Ingénierie DevOps",
        "icon": "fa-cloud",
        "source": "CNCF (Cloud Native Computing Foundation), Linux Foundation (CKA/CKAD), HashiCorp Terraform Associate & AWS/Azure Architecture Frameworks",
        "duration": "10-12 min",
        "studioTarget": "cloud-devops-studio",
        "recommendedCourse": "Formation Cloud Computing, Conteneurs & Ingénierie DevOps Sur-Mesure",
        "formTopic": "Formation Cloud & DevOps Sur-Mesure",
        "maxQuestionsPerSession": 10,
        "description": "Évaluation de haut niveau calibrée par BenchTech avec scénarios d'entreprise réels et diagnostics opérationnels.",
        "questions": [
        {
                "id": 41,
                "scenario": "Une image Docker Node.js en production pèse 1,4 Go et contient les compilateurs C++, les devDependencies de test (Jest), ainsi que le cache npm. L'équipe sécurité exige de réduire la surface d'attaque sous 100 Mo.",
                "question": "Quelle est la stratégie canonique pour obtenir une image minimale et sécurisée sans aucun outil de compilation résiduel ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "Exécuter 'docker commit' après avoir supprimé le dossier node_modules dans le conteneur en cours d'exécution.",
                        "Utiliser un Dockerfile multi-stage avec une première étape de build (node:alpine) et copier uniquement les artéfacts compilés et la production runtime dans une image finale minimale (distroless ou alpine).",
                        "Compresser l'image avec gzip avant de la pousser sur le registry Docker.",
                        "Ajouter l'option --squash lors de la commande docker build sans modifier le Dockerfile."
                ],
                "correct": 1,
                "trapIndex": 3,
                "explanation": "Le pattern multi-stage build permet de séparer l'environnement d'outillage (SDK, compilateurs, outils de test) de l'environnement de production. En copiant uniquement le dossier dist/ et les dépendances de production dans une image de base vierge (distroless/alpine), on élimine drastiquement les CVEs et le poids de l'image.",
                "linkedBlockCode": "CLD-DCK-01",
                "linkedBlockTitle": "Conteneurisation d'Applications avec Docker & Registries Privés",
                "themeCode": "cloud-devops"
        },
        {
                "id": 42,
                "scenario": "Un conteneur hébergeant une base PostgreSQL est redémarré. À l'arrêt du conteneur, toutes les tables créées pendant la session ont disparu, la base s'étant réinitialisée à zéro.",
                "question": "Quelle anomalie architecturale explique cette perte de données et quelle directive Docker corrige définitivement ce comportement ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "Les données ont été écrites dans la couche accessible en écriture (writable container layer) éphémère du conteneur au lieu d'un volume persistant managé monté sur /var/lib/postgresql/data.",
                        "Le conteneur n'a pas été lancé avec l'option --privileged pour autoriser les écritures disque.",
                        "PostgreSQL exige obligatoirement une partition réseau NFS pour fonctionner sous conteneur.",
                        "L'image officielle PostgreSQL ne supporte pas l'écriture sur disque sans licence entreprise."
                ],
                "correct": 0,
                "trapIndex": 1,
                "explanation": "Les conteneurs sont par nature éphémères et sans état (stateless). Tout fichier écrit dans le conteneur réside dans sa couche inscriptible qui est détruite à la suppression du conteneur. Pour les SGBD, il est impératif de monter un volume persistant Docker managé (-v pgdata:/var/lib/postgresql/data).",
                "linkedBlockCode": "CLD-DCK-01",
                "linkedBlockTitle": "Conteneurisation d'Applications avec Docker & Registries Privés",
                "themeCode": "cloud-devops"
        },
        {
                "id": 46,
                "scenario": "Un administrateur a modifié manuellement le groupe de sécurité (Security Group) d'une VM directement depuis la console Web Cloud pour dépanner une urgence. Le code Terraform n'a pas été mis à jour.",
                "question": "Que produira la commande 'terraform plan' lors de la prochaine exécution de la pipeline CI/CD ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "Terraform plan échouera avec une erreur de syntaxe HCL.",
                        "Terraform détectera la dérive (Drift) lors de la phase de refresh et proposera de restaurer le Security Group selon la définition du code HCL, écrasant la modification manuelle.",
                        "Terraform mettra à jour automatiquement le fichier .tf local pour y inclure la règle ajoutée en console.",
                        "Terraform refusera d'exécuter tout plan tant que la VM ne sera pas supprimée manuellement."
                ],
                "correct": 1,
                "trapIndex": 2,
                "explanation": "Le principe déclaratif de l'IaC implique que le code est la seule source de vérité. Lors du plan, Terraform interroge l'état réel du Cloud (refresh), constate la divergence avec le code HCL (Drift), et planifie de supprimer ou modifier les règles manuelles pour conformer l'infrastructure au code source.",
                "linkedBlockCode": "CLD-IAC-03",
                "linkedBlockTitle": "Infrastructure as Code (IaC) avec Terraform & Multi-Cloud",
                "themeCode": "cloud-devops"
        },
        {
                "id": 47,
                "scenario": "Dans un pipeline GitHub Actions, la phase de 'npm install' ou 'mvn clean compile' prend 8 minutes à chaque commit car elle retélécharge tous les packages depuis Internet.",
                "question": "Quelle directive CI/CD d'optimisation réduit le temps de build à quelques secondes sans compromettre l'isolation ?",
                "difficulty": "Opérationnel",
                "points": 2,
                "answers": [
                        "Commiter l'intégralité du répertoire node_modules ou .m2 directement dans le dépôt Git principal.",
                        "Utiliser une action de mise en cache (ex: actions/cache) indexée sur le hash du fichier de verrouillage (package-lock.json / pom.xml).",
                        "Désactiver la vérification des signatures cryptographiques des dépendances dans le pipeline.",
                        "Remplacer les tests unitaires par des tests d'intégration manuels."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Le caching de dépendances permet de sauvegarder le dossier des dépendances entre deux runs de workflow. En liant la clé de cache au hash du lockfile (hashFiles('**/package-lock.json')), le cache n'est invalidé que lorsqu'une dépendance est ajoutée ou mise à jour, réduisant drastiquement le temps d'exécution.",
                "linkedBlockCode": "CLD-CICD-04",
                "linkedBlockTitle": "Pipelines CI/CD & Automatisation des Déploiements (GitHub Actions / GitLab)",
                "themeCode": "cloud-devops"
        },
        {
                "id": 43,
                "scenario": "Après un nouveau déploiement sur Kubernetes, un Pod bascule immédiatement dans l'état 'CrashLoopBackOff'. La commande 'kubectl describe pod' indique que le conteneur est tué et redémarré en boucle toutes les 20 secondes.",
                "question": "Quelle cause fréquente liée aux sondes de santé (Probes) déclenche ce cycle de redémarrages intempestifs ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Le CPU du nœud worker est saturé à 100%.",
                        "La livenessProbe a été configurée avec un timeout ou un initialDelaySeconds trop court, tuant l'application avant qu'elle n'ait terminé sa phase d'initialisation (chargement du framework ou migrations de base).",
                        "Le cluster Kubernetes a perdu son quorum etcd.",
                        "Le Pod ne possède pas d'adresse IP publique pour répondre au kubelet."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Si une livenessProbe échoue un nombre de fois consécutif supérieur à failureThreshold, le kubelet termine le conteneur et le redémarre. Si l'application prend 30 secondes pour démarrer mais que le initialDelaySeconds est fixé à 5s, le kubelet tue l'application en boucle, provoquant un CrashLoopBackOff.",
                "linkedBlockCode": "CLD-K8S-02",
                "linkedBlockTitle": "Orchestration & Déploiement Résilient avec Kubernetes (K8s)",
                "themeCode": "cloud-devops"
        },
        {
                "id": 44,
                "scenario": "Vous devez exposer 15 microservices HTTP hébergés sur un même cluster Kubernetes derrière un seul nom de domaine avec routage basé sur les chemins d'URL (/api/users, /api/orders) et terminaison SSL/TLS centralisée.",
                "question": "Quelle ressource native Kubernetes doit être mise en place pour éviter de provisionner 15 LoadBalancers cloud distincts et coûteux ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Un Service de type NodePort ouvrant des ports compris entre 30000 et 32767 sur chaque nœud.",
                        "Une ressource Ingress associée à un Ingress Controller (ex: Ingress-Nginx ou Traefik) qui multiplexe les requêtes L7 et centralise le certificat TLS.",
                        "Un DaemonSet déployé sur chaque nœud avec une directive hostNetwork: true.",
                        "Une ressource NetworkPolicy de type Egress sur le namespace default."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "L'Ingress agit au niveau applicatif (Couche 7). Contrairement aux Services de type LoadBalancer qui créent un répartiteur de charge Cloud externe par service (très coûteux), un unique Ingress Controller route le trafic de plusieurs services via des règles d'hôtes et de chemins avec terminaison SSL.",
                "linkedBlockCode": "CLD-K8S-02",
                "linkedBlockTitle": "Orchestration & Déploiement Résilient avec Kubernetes (K8s)",
                "themeCode": "cloud-devops"
        },
        {
                "id": 45,
                "scenario": "Deux ingénieurs DevOps exécutent 'terraform apply' simultanément sur le même projet d'infrastructure. Le premier apply commence à provisionner des ressources lorsque le second apply échoue avec l'erreur : 'Error: Error acquiring the state lock'.",
                "question": "Quel composant d'architecture Terraform protège l'infrastructure contre les corruptions d'état concurrentes ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Le compilateur HCL qui interdit deux instances du même binaire terraform sur l'OS.",
                        "Le backend distant (Remote Backend) configuré avec un mécanisme de verrouillage distribué (State Locking, ex: table DynamoDB sur AWS ou blob lease sur Azure).",
                        "Le fournisseur de cloud (Cloud Provider) qui bloque l'API pendant 15 minutes.",
                        "Le fichier .gitignore qui empêche l'exécution simultanée des commandes git."
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "Terraform utilise le state locking pour garantir qu'une seule opération de modification du fichier tfstate puisse avoir lieu à la fois. Si deux apply s'exécutaient en parallèle, ils écraseraient mutuellement l'état réel des ressources, provoquant des ressources orphelines ou corrompues.",
                "linkedBlockCode": "CLD-IAC-03",
                "linkedBlockTitle": "Infrastructure as Code (IaC) avec Terraform & Multi-Cloud",
                "themeCode": "cloud-devops"
        },
        {
                "id": 48,
                "scenario": "Pour une application e-commerce à très fort trafic, l'équipe veut déployer une nouvelle version majeure en acheminant d'abord 5% du trafic des utilisateurs réels vers la nouvelle version, surveiller les métriques d'erreur pendant 30 minutes, puis augmenter progressivement à 100%.",
                "question": "Comment nomme-t-on cette stratégie de déploiement continu avancée ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "Un déploiement In-Place avec arrêt de service programmé.",
                        "Un déploiement Canari (Canary Deployment), qui permet d'exposer un sous-ensemble du trafic à la nouvelle version tout en limitant le rayon d'impact en cas de régression.",
                        "Un déploiement Blue/Green traditionnel où l'intégralité du trafic bascule d'un coup via le routeur.",
                        "Un déploiement par shadow traffic où le trafic est dupliqué sans impacter les réponses utilisateurs."
                ],
                "correct": 1,
                "trapIndex": 2,
                "explanation": "Le déploiement Canari (Canary Release) consiste à injecter la nouvelle version sur un échantillon restreint de requêtes réelles (ex: 5%) pour valider les métriques de production avant d'augmenter progressivement la part du trafic. Le Blue/Green bascule 100% du trafic d'un environnement à l'autre de manière binaire.",
                "linkedBlockCode": "CLD-CICD-04",
                "linkedBlockTitle": "Pipelines CI/CD & Automatisation des Déploiements (GitHub Actions / GitLab)",
                "themeCode": "cloud-devops"
        },
        {
                "id": 49,
                "scenario": "Sur un tableau de bord Grafana en production, vous devez déclencher une alerte lorsque le taux de réponses HTTP 5xx d'une API dépasse 2% du trafic total sur une fenêtre glissante de 5 minutes.",
                "question": "Quelle expression PromQL modélise fidèlement cette règle de détection SLI ?",
                "difficulty": "Avancé",
                "points": 3,
                "answers": [
                        "sum(rate(http_requests_total[5m])) > 2",
                        "sum(rate(http_requests_total{status=~'5..'}[5m])) / sum(rate(http_requests_total[5m])) > 0.02",
                        "http_requests_errors == 2%",
                        "count(http_status_500) > 5"
                ],
                "correct": 1,
                "trapIndex": 0,
                "explanation": "La fonction rate() calcule le taux d'accroissement par seconde d'un compteur sur l'intervalle [5m]. Le ratio d'erreur s'obtient en divisant la somme des requêtes en erreur (status=~'5..') par la somme totale de toutes les requêtes, et en testant le seuil de 0.02 (2%).",
                "linkedBlockCode": "CLD-OBS-05",
                "linkedBlockTitle": "Observabilité, Monitoring & Métriques (Prometheus & Grafana)",
                "themeCode": "cloud-devops"
        },
        {
                "id": 50,
                "scenario": "Dans le cadre de la conformité ISO 27001 et PCI-DSS, la direction de la sécurité impose qu'aucun conteneur ne puisse être exécuté avec l'UID 0 (utilisateur root) ni avec le paramètre 'privileged: true' sur le cluster Kubernetes.",
                "question": "Quel mécanisme architectural moderne permet d'interdire et rejeter ces déploiements non conformes dès la soumission du manifeste YAML à l'API Server ?",
                "difficulty": "Expert",
                "points": 3,
                "answers": [
                        "Un cronjob Linux exécutant 'crontab' toutes les 5 minutes pour inspecter les conteneurs.",
                        "Un contrôleur d'admission dynamique de validation (Validating Admission Webhook) couplé à un moteur de politiques déclaratives tel qu'OPA Gatekeeper ou Kyverno.",
                        "L'activation du pare-feu iptables sur les nœuds workers du cluster.",
                        "L'installation d'un antivirus traditionnel sur chaque VM hôte."
                ],
                "correct": 1,
                "trapIndex": 2,
                "explanation": "Les Admission Webhooks de Kubernetes interceptent toute requête vers l'API Server avant sa persistance dans etcd. OPA Gatekeeper (ou Kyverno) évalue les manifestes contre des contraintes strictes (ConstraintTemplates en langage Rego) et rejette instantanément toute création de Pod ne respectant pas les règles non-root ou non-privileged.",
                "linkedBlockCode": "CLD-SEC-06",
                "linkedBlockTitle": "DevSecOps : Sécurisation du Cycle CI/CD & Scan de Vulnérabilités",
                "themeCode": "cloud-devops"
        }
]
    };

    window.BenchTechQuizDatabase['cloud-devops'] = themeDefinition;
    window.BenchTechQuizDatabase['cloud_devops'] = themeDefinition;
})();
