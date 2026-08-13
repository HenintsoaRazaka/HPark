const dbSingleton = require('../config/database');

class Ajout {
    static async ajout(data) {
        const pool = dbSingleton.getPool();
        const sql = `
            INSERT INTO stationnement (proprietaire, telephone, cin, marque_modele, immatriculation, couleur, numero_parking)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.proprietaire,
            data.telephone,
            data.cin,
            data.marque_modele,
            data.immatriculation,
            data.couleur,
            data.numero_parking
        ];
        return await pool.execute(sql, values);
    }

    static async sortie({ id, prixexact }) {
        const pool = dbSingleton.getPool();
        const sql = `
            UPDATE stationnement
            SET heure_sortie = NOW(), statut = 'termine', prix = ?
            WHERE id = ?
        `;
        return await pool.execute(sql, [prixexact, id]);
    }
};

module.exports = Ajout;