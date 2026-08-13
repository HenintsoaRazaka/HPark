const dbSingleton = require('../config/database');

class Stationnement {
    static async Stats() {

        const pool = dbSingleton.getPool();
        const [enCours] = await pool.query(
            "SELECT COUNT(*) AS total FROM stationnement WHERE statut = 'en_cours'"
        );

        const [expedies] = await pool.query(
            "SELECT COUNT(*) AS total FROM stationnement WHERE date_stationnement = CURRENT_DATE()"
        );

        const [journalier] = await pool.query(
            "SELECT COALESCE(SUM(prix), 0) AS total FROM stationnement WHERE statut = 'termine' AND DATE(heure_sortie) = CURRENT_DATE()"
        );

        return {
            enCours: enCours[0]?.total || 0,
            expedies: expedies[0]?.total || 0,
            journalier: parseFloat(journalier[0].total)
        };
    }

    static async barStats() {
        const pool = dbSingleton.getPool();
        const [barStats] = await pool.query(
            "SELECT DATE_FORMAT(NOW(), '%Y-%m-%d') AS date_jour, COALESCE(SUM(prix), 0) AS total_recette FROM stationnement WHERE statut = 'termine' AND heure_sortie >= DATE_SUB(CURRENT_DATE(), INTERVAL 6 DAY) GROUP BY DATE(heure_sortie) ORDER BY date_jour ASC"
        );
        // console.log("barStats:", barStats);
        return barStats;
    }

    static async historiquestat() {
        const pool = dbSingleton.getPool();
        const [historique] = await pool.query(
            "SELECT proprietaire, immatriculation, heure_sortie, TIMESTAMPDIFF(MINUTE, heure_sortie, NOW()) AS minutes_ecoulees FROM stationnement WHERE statut = 'termine' ORDER BY heure_sortie DESC LIMIT 3"
        );

        return historique;
    }

    static async historique() {
        const pool = dbSingleton.getPool();
        const [historique] = await pool.query(
            "SELECT proprietaire, telephone, cin,marque_modele, immatriculation, couleur, numero_parking, date_stationnement, DATE_FORMAT(heure_entree, '%H:%i') AS heure_sortie, DATE_FORMAT(heure_sortie, '%H:%i') AS heure_sortie, prix FROM stationnement WHERE statut = 'termine' ORDER BY heure_sortie DESC"
        );
        return historique;
    }

    static async voiture() {
        const pool = dbSingleton.getPool();
        const [voitures] = await pool.query(
            "SELECT  id, proprietaire, telephone, cin, marque_modele, immatriculation, couleur, numero_parking, DATE_FORMAT(heure_entree, '%H:%i') AS heure_entrer, DATE_FORMAT(date_stationnement, '%Y-%m-%d') AS date_stationnement FROM stationnement WHERE statut = 'en_cours' ORDER BY heure_entree DESC"
        );
        return voitures;
    }

    static async NumeroParking(){
        const pool = dbSingleton.getPool();
        const [numeroParking] = await pool.query(
            "SELECT numero_parking FROM stationnement WHERE statut = 'en_cours' ORDER BY numero_parking ASC"
        );
        return numeroParking;   
    }

    static async heure(id) {
        const pool = dbSingleton.getPool();
        const [heure] = await pool.query(
            "SELECT TIMESTAMPDIFF(SECOND, heure_entree, NOW()) AS seconde FROM stationnement WHERE id = ?",
            [id]
        );

        return heure[0]?.seconde || 0;
    }
}

module.exports = Stationnement;

