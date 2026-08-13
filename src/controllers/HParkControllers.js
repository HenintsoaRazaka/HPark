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

// exports.enregistrerEntree = async (req, res) => {
//     try {
//         const { proprietaire, telephone, cin, marque_modele, immatriculation, couleur, numero_parking } = req.body;

//         if (!proprietaire || !immatriculation || !numero_parking) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Le nom du propriétaire, l'immatriculation et le numéro de place sont obligatoires."
//             });
//         }

//         const placeOccupee = await Stationnement.checkPlaceOccupee(numero_parking);
//         if (placeOccupee) {
//             return res.status(400).json({
//                 success: false,
//                 message: `La place ${numero_parking} est déjà occupée.`
//             });
//         }

//         const stationnementData = {
//             proprietaire,
//             telephone,
//             cin,
//             marque_modele,
//             immatriculation,
//             couleur,
//             numero_parking
//         };

//         const insertId = await Stationnement.create(stationnementData);

//         return res.status(201).json({
//             success: true,
//             message: "Véhicule enregistré avec succès !",
//             id: insertId
//         });

//     } catch (error) {
//         console.error("Erreur lors de l'enregistrement de l'entrée :", error);
//         return res.status(500).json({
//             success: false,
//             message: "Erreur serveur lors de l'enregistrement."
//         });
//     }
// };

// exports.enregistrerSortie = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const stationnement = await Stationnement.findById(id);

//         if (!stationnement || stationnement.statut !== 'en_cours') {
//             return res.status(404).json({
//                 success: false,
//                 message: "Stationnement non trouvé ou déjà clôturé."
//             });
//         }

//         const heureEntree = new Date(stationnement.heure_entree);
//         const heureSortie = new Date();

//         const diffEnMs = heureSortie - heureEntree;
//         const diffEnHeures = Math.ceil(diffEnMs / (1000 * 60 * 60));
//         const heuresFacturees = Math.max(1, diffEnHeures);

//         const prixTotal = heuresFacturees * TARIF_HORAIRE;

//         await Stationnement.updateSortie(id, heureSortie, prixTotal);

//         return res.status(200).json({
//             success: true,
//             message: "Sortie du véhicule enregistrée avec succès !",
//             recapitulatif: {
//                 immatriculation: stationnement.immatriculation,
//                 heure_entree: heureEntree,
//                 heure_sortie: heureSortie,
//                 duree_heures: heuresFacturees,
//                 prix_total: prixTotal
//             }
//         });

//     } catch (error) {
//         console.error("Erreur lors de l'enregistrement de la sortie :", error);
//         return res.status(500).json({
//             success: false,
//             message: "Erreur serveur lors de la validation de la sortie."
//         });
//     }
// };

// exports.getVehiculesGarés = async (req, res) => {
//     try {
//         const vehicules = await Stationnement.findActive();
//         return res.status(200).json({
//             success: true,
//             count: vehicules.length,
//             data: vehicules
//         });
//     } catch (error) {
//         console.error("Erreur lors de la récupération des véhicules garés :", error);
//         return res.status(500).json({
//             success: false,
//             message: "Erreur serveur lors de la récupération des données."
//         });
//     }
// };

// exports.getHistorique = async (req, res) => {
//     try {
//         const historique = await Stationnement.findAll();
//         return res.status(200).json({
//             success: true,
//             data: historique
//         });
//     } catch (error) {
//         console.error("Erreur lors de la récupération de l'historique :", error);
//         return res.status(500).json({
//             success: false,
//             message: "Erreur serveur lors de la récupération de l'historique."
//         });
//     }
// };