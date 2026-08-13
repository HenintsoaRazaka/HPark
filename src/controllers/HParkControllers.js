const Stationnement = require('../models/Stationnement');

const TARIF_HORAIRE = 500;

class HParkController {

    static async Stat (req, res) {
        try {
            const stats = await Stationnement.Stats();
            const barStats = await Stationnement.barStats();
            const histStats = await Stationnement.historiquestat();

            return res.status(200).json({
                success: true,
                data: stats,
                barData: barStats,
                histstats: histStats
            });
        }
        catch (error) {
            console.error("Erreur lors de la récupération des statistiques :", error);
            return res.status(500).json({
                success: false,
                message: "Erreur serveur lors de la récupération des statistiques."
            });
        }
    };

    static async Voitures(req, res) {
        try {
            const voitures = await Stationnement.voiture();

            return res.status(200).json({
                success: true,
                data: voitures
            });
        }
        catch (error) {
            console.error("Erreur lors de la récupération des voitures :", error);
            return res.status(500).json({
                success: false,
                message: "Erreur serveur lors de la récupération des voitures."
            });
        }
    };

    static async NumeroParking(req, res) {
        try {
            const numeroParking = await Stationnement.NumeroParking();
            return res.status(200).json({
                success: true,
                data: numeroParking
            });
        }
        catch (error) {
            console.error("Erreur lors de la récupération des numéros de parking :", error);
            return res.status(500).json({
                success: false,
                message: "Erreur serveur lors de la récupération des numéros de parking."
            });
        }
    }

    static async historique(req, res) {
        try {
            const historique = await Stationnement.historique();

            return res.status(200).json({
                success: true,
                data: historique
            });
        }
        catch (error) {
            console.error("Erreur lors de la récupération de l'historique :", error);
            return res.status(500).json({
                success: false,
                message: "Erreur serveur lors de la récupération de l'historique."
            });
        }
    }
}

module.exports = HParkController;

