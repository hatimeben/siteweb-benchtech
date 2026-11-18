-- =======================================================================
-- BENCHTECH - BASE DE DONNÉES SQLite : FORMATIONS SUR-MESURE & CATALOGUE
-- Schéma Conceptuel & Logique Normalisé (3NF)
-- Fichier : database/schema.sql
-- =======================================================================

PRAGMA foreign_keys = ON;

-- 1. Table des Filières d'Expertise (Domaines Technologiques)
CREATE TABLE IF NOT EXISTS filieres (
    id_filiere INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    libelle TEXT NOT NULL,
    description TEXT NOT NULL,
    icone TEXT DEFAULT 'fa-layer-group',
    est_actif INTEGER NOT NULL DEFAULT 1 CHECK (est_actif IN (0, 1))
);

-- 2. Table des Niveaux de Compétence
CREATE TABLE IF NOT EXISTS niveaux (
    id_niveau INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    libelle TEXT NOT NULL,
    description TEXT,
    ordre_hierarchique INTEGER NOT NULL UNIQUE
);

-- 3. Table des Profils Cibles des Participants
CREATE TABLE IF NOT EXISTS profils_participants (
    id_profil INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    libelle TEXT NOT NULL,
    prerequis_recommandes TEXT,
    est_actif INTEGER NOT NULL DEFAULT 1 CHECK (est_actif IN (0, 1))
);

-- 4. Table des Blocs de Compétences Modulaires (Unités Pédagogiques)
CREATE TABLE IF NOT EXISTS blocs_competences (
    id_bloc INTEGER PRIMARY KEY AUTOINCREMENT,
    code_bloc TEXT NOT NULL UNIQUE,
    titre_bloc TEXT NOT NULL,
    id_filiere INTEGER NOT NULL,
    id_niveau INTEGER NOT NULL,
    duree_heures REAL NOT NULL CHECK (duree_heures > 0),
    badge_technique TEXT,
    objectif_operationnel TEXT NOT NULL,
    ordre_pedagogique INTEGER NOT NULL DEFAULT 1,
    est_actif INTEGER NOT NULL DEFAULT 1 CHECK (est_actif IN (0, 1)),
    FOREIGN KEY (id_filiere) REFERENCES filieres (id_filiere) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_niveau) REFERENCES niveaux (id_niveau) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- 5. Table des Contenus Détaillés des Modules & Ateliers Pratiques (Labs)
CREATE TABLE IF NOT EXISTS contenus_modules (
    id_module INTEGER PRIMARY KEY AUTOINCREMENT,
    id_bloc INTEGER NOT NULL,
    titre_module TEXT NOT NULL,
    theorie_notions TEXT NOT NULL,
    atelier_lab TEXT NOT NULL,
    duree_minutes INTEGER DEFAULT 210 CHECK (duree_minutes > 0),
    ordre_affichage INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (id_bloc) REFERENCES blocs_competences (id_bloc) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 6. Table de Liaison N:M entre Blocs de Compétences et Profils Cibles
CREATE TABLE IF NOT EXISTS bloc_profils (
    id_bloc INTEGER NOT NULL,
    id_profil INTEGER NOT NULL,
    pertinence TEXT DEFAULT 'Recommandé' CHECK (pertinence IN ('Essentiel', 'Recommandé', 'Optionnel')),
    PRIMARY KEY (id_bloc, id_profil),
    FOREIGN KEY (id_bloc) REFERENCES blocs_competences (id_bloc) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_profil) REFERENCES profils_participants (id_profil) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 7. Table des Demandes de Formations Sur-Mesure & Devis Émis (Dossiers Clients)
CREATE TABLE IF NOT EXISTS demandes_sur_mesure (
    id_demande INTEGER PRIMARY KEY AUTOINCREMENT,
    reference_dossier TEXT NOT NULL UNIQUE,
    nom_entreprise TEXT NOT NULL,
    departement_service TEXT,
    contact_nom TEXT,
    contact_email TEXT,
    contact_telephone TEXT,
    format_animation TEXT NOT NULL DEFAULT 'Présentiel Intra' CHECK (format_animation IN ('Présentiel Intra', 'Distanciel Interactif', 'Hybride')),
    orientation_prioritaire TEXT NOT NULL DEFAULT 'Cas d''usage métiers réels',
    rythme_envisage TEXT NOT NULL DEFAULT 'Journées consécutives immersives',
    effectif_estime INTEGER DEFAULT 8 CHECK (effectif_estime > 0),
    volume_horaire_total REAL DEFAULT 0,
    statut_demande TEXT NOT NULL DEFAULT 'Dossier Émis' CHECK (statut_demande IN ('Brouillon', 'Dossier Émis', 'Validé Client', 'Convention Signée', 'Formation Réalisée')),
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    commentaires_cadrage TEXT
);

-- 8. Table de Liaison N:M entre Demandes Sur-Mesure et Blocs Retenus
CREATE TABLE IF NOT EXISTS demande_blocs (
    id_demande INTEGER NOT NULL,
    id_bloc INTEGER NOT NULL,
    position_sequence INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (id_demande, id_bloc),
    FOREIGN KEY (id_demande) REFERENCES demandes_sur_mesure (id_demande) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_bloc) REFERENCES blocs_competences (id_bloc) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- =======================================================================
-- MODULE QUIZ DYNAMIQUE & DIAGNOSTICS DE POSITIONNEMENT
-- =======================================================================

-- 9. Table des Thématiques de Quiz
CREATE TABLE IF NOT EXISTS quiz_themes (
    id_theme INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE, -- 'powerbi', 'sql', 'copilot', 'excel', 'unix', 'general'
    titre TEXT NOT NULL,
    icone TEXT DEFAULT 'fa-question-circle',
    source_standard TEXT,
    id_filiere INTEGER,
    questions_par_session INTEGER NOT NULL DEFAULT 10,
    est_actif INTEGER NOT NULL DEFAULT 1 CHECK (est_actif IN (0, 1)),
    FOREIGN KEY (id_filiere) REFERENCES filieres (id_filiere) ON UPDATE CASCADE ON DELETE SET NULL
);

-- 10. Table du Pool Central de Questions
CREATE TABLE IF NOT EXISTS quiz_questions (
    id_question INTEGER PRIMARY KEY AUTOINCREMENT,
    id_theme INTEGER NOT NULL,
    id_bloc INTEGER, -- Bloc de formation rattaché pour prescription sur-mesure !
    scenario TEXT NOT NULL,
    question TEXT NOT NULL,
    difficulte TEXT NOT NULL CHECK (difficulte IN ('Fondamentaux', 'Opérationnel', 'Avancé', 'Expert')),
    points INTEGER NOT NULL DEFAULT 1 CHECK (points > 0),
    explication TEXT NOT NULL,
    est_actif INTEGER NOT NULL DEFAULT 1 CHECK (est_actif IN (0, 1)),
    FOREIGN KEY (id_theme) REFERENCES quiz_themes (id_theme) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_bloc) REFERENCES blocs_competences (id_bloc) ON UPDATE CASCADE ON DELETE SET NULL
);

-- 11. Table des Réponses (Options à Choix Multiples)
CREATE TABLE IF NOT EXISTS quiz_reponses (
    id_reponse INTEGER PRIMARY KEY AUTOINCREMENT,
    id_question INTEGER NOT NULL,
    texte_reponse TEXT NOT NULL,
    est_correcte INTEGER NOT NULL DEFAULT 0 CHECK (est_correcte IN (0, 1)),
    est_piege INTEGER NOT NULL DEFAULT 0 CHECK (est_piege IN (0, 1)),
    ordre_affichage INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (id_question) REFERENCES quiz_questions (id_question) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 12. Table des Sessions de Passage (Diagnostics Candidats & Leads)
CREATE TABLE IF NOT EXISTS quiz_sessions (
    id_session INTEGER PRIMARY KEY AUTOINCREMENT,
    id_theme INTEGER NOT NULL,
    reference_session TEXT NOT NULL UNIQUE, -- ex: BT-EVAL-2026-A1B2
    candidat_nom TEXT,
    candidat_email TEXT,
    candidat_entreprise TEXT,
    score_obtenu INTEGER NOT NULL,
    score_max INTEGER NOT NULL,
    pourcentage REAL NOT NULL,
    niveau_attribue TEXT NOT NULL,
    date_passage DATETIME DEFAULT CURRENT_TIMESTAMP,
    details_json TEXT,
    FOREIGN KEY (id_theme) REFERENCES quiz_themes (id_theme) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- =======================================================================
-- INDEX D'OPTIMISATION DE PERFORMANCES
-- =======================================================================
CREATE INDEX IF NOT EXISTS idx_blocs_filiere ON blocs_competences(id_filiere);
CREATE INDEX IF NOT EXISTS idx_blocs_niveau ON blocs_competences(id_niveau);
CREATE INDEX IF NOT EXISTS idx_contenus_bloc ON contenus_modules(id_bloc);
CREATE INDEX IF NOT EXISTS idx_demandes_ref ON demandes_sur_mesure(reference_dossier);
CREATE INDEX IF NOT EXISTS idx_demandes_entreprise ON demandes_sur_mesure(nom_entreprise);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_theme ON quiz_questions(id_theme);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_diff ON quiz_questions(difficulte);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_bloc ON quiz_questions(id_bloc);
CREATE INDEX IF NOT EXISTS idx_quiz_reponses_question ON quiz_reponses(id_question);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_ref ON quiz_sessions(reference_session);
