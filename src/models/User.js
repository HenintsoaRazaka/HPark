const db = require('../config/database');

class User {
    static async findByImmatriculation(matriculation) {
        const pool = db.getPool();
        const [rows] = await pool.execute('SELECT * FROM gerant WHERE matriculation = ?', [matriculation]);
        return rows[0];
    }
}

module.exports = User;