/**
 * BenchTech Academy - Banque de Questions
 * Thématique : Environnements UNIX, Linux Avancé, Kernel & Shell Scripting
 * Casse officielle : BenchTech | « shaping tomorrow, today »
 */
window.BenchTechQuizDatabase = window.BenchTechQuizDatabase || {};

(function() {
    const themeDefinition = {
    "id": "unix",
    "title": "Environnements UNIX, Linux Avancé, Kernel & Shell Scripting",
    "icon": "fa-terminal",
    "source": "Standards POSIX.1-2017 & Référentiel Linux Professional Institute (LPIC-2/3)",
    "duration": "10-12 min",
    "studioTarget": "unix-studio",
    "recommendedCourse": "Formation UNIX & Linux Sur-Mesure : Administration Système & Scripting Bash",
    "formTopic": "Formation UNIX Sur-Mesure",
    "description": "Évaluation des compétences système : signaux POSIX, gestion mémoire (OOM Killer, swap), diagnostic de processus zombies, descripteurs de fichiers et pipelines IPC.",
    "questions": [
        {
            "scenario": "La commande 'ps aux' affiche un processus avec l'état 'Z' (defunct). L'administrateur tente d'exécuter 'kill -9 <PID>' mais le processus refuse de disparaître de la table des processus.",
            "question": "Pourquoi le signal SIGKILL est-il totalement inopérant et quelle est la seule action de résolution ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "Le processus est protégé par SELinux en mode Enforcing.",
                "Un processus zombie est déjà mort : il ne consomme plus de CPU ni de mémoire mais conserve son entrée dans la table des processus car son processus père n'a pas lu son code de retour via l'appel système wait() ; la solution consiste à envoyer le signal SIGCHLD au père ou à terminer le père pour que 'init/systemd' (PID 1) adopte le zombie et le purge.",
                "Le signal -9 est réservé à l'utilisateur root et a été exécuté avec sudo au lieu de su.",
                "Il faut vider le cache /proc/sys/vm/drop_caches pour débloquer la mémoire."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "Un processus Zombie n'exécute plus aucun code : il ne peut donc recevoir ni traiter aucun signal, y compris SIGKILL (9). Il reste présent uniquement pour transmettre son code de terminaison (exit status). Si le père ne fait pas de wait(), l'entrée est orpheline. Tuer le père force PID 1 (systemd) à adopter le processus et à purger immédiatement son entrée."
        },
        {
            "scenario": "Sur un serveur de production hébergeant une base de données critique, les logs système 'dmesg' affichent des messages répétés : 'Out of memory: Kill process (mysqld) score 850 or sacrifice child'.",
            "question": "Quel composant du noyau Linux intervient et comment protéger le processus SGBD contre cet arbitrage fatal ?",
            "difficulty": "Expert",
            "points": 3,
            "answers": [
                "C'est le Garbage Collector du kernel ; il faut redémarrer le serveur en mode single-user.",
                "C'est le mécanisme OOM Killer (Out Of Memory) du noyau ; pour immuniser le SGBD, il faut ajuster la valeur de /proc/<PID>/oom_score_adj à -1000 et optimiser les allocations mémoire de l'application.",
                "C'est une attaque par injection réseau ; il faut bloquer les ports avec iptables.",
                "Le noyau Linux ne dispose d'aucun mécanisme automatique de terminaison de processus."
            ],
            "correct": 1,
            "trapIndex": 0,
            "explanation": "Quand la RAM et le swap sont saturés, le mécanisme OOM Killer du noyau Linux s'active pour éviter un kernel panic. Il calcule un oom_score basé sur la consommation mémoire et termine brutalement le processus le plus consommateur. Définir 'oom_score_adj' à -1000 garantit que le processus ne sera jamais choisi comme victime par le noyau."
        },
        {
            "scenario": "Dans un script Bash de traitement batch de plusieurs gigaoctets, vous écrivez : 'cat gros_fichier.log | grep \"ERROR\" | awk '{print $4}' | sort | uniq -c'.",
            "question": "Quels sont les deux défauts majeurs de performance d'un tel pipeline et leur optimisation canonique ?",
            "difficulty": "Avancé",
            "points": 2,
            "answers": [
                "L'utilisation inutile de 'cat' (Useless Use of Cat) qui crée un processus et un descripteur superflu, et l'enchaînement grep+awk+sort+uniq qui peut être unifié directement en un seul script awk performant exploitant des tableaux associatifs sans tri préliminaire coûteux.",
                "Le caractère pipe '|' est limité à 64 Ko de transfert de données sous Linux.",
                "La commande sort ne peut pas fonctionner sur des fichiers non chiffrés.",
                "La commande uniq refuse de traiter les flux provenant de awk."
            ],
            "correct": 0,
            "trapIndex": 1,
            "explanation": "'cat fichier | grep' est un antipattern notoire : 'grep pattern fichier' lit directement sans fork superflu. De plus, passer par sort | uniq -c force la matérialisation et le tri complet en mémoire/disque de toutes les lignes, alors qu'un simple awk '/ERROR/ {count[$4]++} END {for (k in count) print count[k], k}' effectue le comptage en une seule passe linéaire O(N)."
        }
    ]
};

    // Enregistrement dans la banque centrale (avec support tiret et underscore)
    window.BenchTechQuizDatabase["unix"] = themeDefinition;
    window.BenchTechQuizDatabase["unix"] = themeDefinition;
    if ("unix".includes('-')) {
        window.BenchTechQuizDatabase["unix".replace(/-/g, '_')] = themeDefinition;
    }
    if ("unix".includes('_')) {
        window.BenchTechQuizDatabase["unix".replace(/_/g, '-')] = themeDefinition;
    }
})();
