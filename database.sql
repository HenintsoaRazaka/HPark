CREATE DATABASES HPark;
USE HPark;

CREATE TABLE IF NOT EXISTS gerant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    immatriculation VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stationnement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proprietaire VARCHAR(100) NOT NULL,
    telephone VARCHAR(20) DEFAULT NULL,
    cin VARCHAR(50) DEFAULT NULL,
    marque_modele VARCHAR(100) NOT NULL,
    immatriculation VARCHAR(50) NOT NULL,
    couleur VARCHAR(50) DEFAULT NULL,
    numero_parking VARCHAR(20) DEFAULT NULL,
    heure_entree DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    heure_sortie DATETIME DEFAULT NULL,
    prix DECIMAL(10, 2) DEFAULT 0.00,
    statut ENUM('en_cours', 'termine') DEFAULT 'en_cours'
);
