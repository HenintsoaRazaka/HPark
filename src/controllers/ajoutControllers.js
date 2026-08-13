const Stationnement = require('../models/Ajout');
const Stationnement1 = require('../models/Stationnement');

class AjoutController {
    static async ajout(req, res) {
        try {
            const data = req.body;

            await Stationnement.ajout(data);
            console.log("Véhicule ajouté avec succès :", data);
            return res.status(200).json({ 
                success: true, 
                message: 'Véhicule ajouté avec succès.' 
            });
        } catch (error) {
            console.error("Erreur lors de l'ajout du véhicule :", error);
            return res.status(500).json({ success: false, message: 'Erreur lors de l\'ajout du véhicule.' });
        }
    }

    static async sortie(req, res) {
        const prix = 500; 
        const tarifheure = 3600;

        try {
            const { id } = req.body;
            const seconde = await Stationnement1.heure(id);
            console.log("Seconde calculée :", seconde);
            const prixTotal = (seconde/tarifheure) * prix;
            const prixexact = Math.ceil(prixTotal / 100) * 100;

            await Stationnement.sortie({ id , prixexact});
            return res.status(200).json({ 
                success: true, 
                message: 'Véhicule sorti avec succès.' 
            });
        } catch (error) {
            console.error("Erreur lors de la sortie du véhicule :", error);
            return res.status(500).json({ success: false, message: 'Erreur lors de la sortie du véhicule.' });
        }
    }
}

module.exports = AjoutController;