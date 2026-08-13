// const db = require('../config/database');
// const bcrypt = require('bcrypt');

// async function seedGerant(req, res) {
//     const immatriculation = "HPark001A";
//     const rawPassword = "Tsotsola";

//     try {
//         const pool = db.getPool();

//         const hashedPassword = await bcrypt.hash(rawPassword, 10);

//         // 3. Insérer
//         await pool.execute(
//             'UPDATE gerant SET password = ? WHERE immatriculation = ?',
//             [hashedPassword, immatriculation]
//         );

//         console.log('Mot de passe haché mis à jour avec succès pour l\'immatriculation :', immatriculation);
//     } catch (error) {
//         console.error('Erreur lors de la mise à jour :', error);
//         return res.status(500).json({ message: 'Erreur serveur' });
//     }
// }

// seedGerant();
// module.exports = seedGerant;

async function loadWeeklyChart() {
    const container = document.getElementById('chart-container');
    container.innerHTML = ''; // Nettoyage

    try {
        const response = await fetch('/api/HPark/WeeklyStat');
        const result = await response.json();
        const apiData = result.data || []; 
        // Exemple d'apiData reçu : [{ date_jour: '2026-08-11', total_recette: 45.00 }, ...]

        // 1. Génération des 7 derniers jours (glissants)
        const days = [];
        const maxBarHeightPx = 180; // Hauteur max visuelle d'une barre en pixels

        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            
            // Format YYYY-MM-DD pour la correspondance backend
            const isoDate = d.toISOString().split('T')[0]; 
            // Format "01", "02", ... "11" pour l'étiquette
            const labelDay = String(d.getDate()).padStart(2, '0'); 

            // Recherche de la recette pour ce jour-là
            const match = apiData.find(item => item.date_jour.startsWith(isoDate));
            const total = match ? Number(match.total_recette) : 0;

            days.push({ label: labelDay, total: total });
        }

        // 2. Détermination de la valeur maximale pour faire une échelle proportionnelle
        const maxVal = Math.max(...days.map(d => d.total), 100); // 100 au minimum pour éviter la division par zéro

        // 3. Injection du HTML avec hauteur initiale à 0px
        days.forEach(day => {
            const wrapper = document.createElement('div');
            wrapper.className = 'chart-bar-wrapper';
            
            // Calcul de la hauteur proportionnelle
            const heightInPx = Math.round((day.total / maxVal) * maxBarHeightPx);

            wrapper.innerHTML = `
                <div class="chart-bar" style="height: 0px;" title="${day.total.toFixed(2)} Ar"></div>
                <span class="chart-label">${day.label}</span>
            `;
            container.appendChild(wrapper);

            // 4. Déclenchement de l'animation CSS (passage de 0px à la hauteur réelle)
            setTimeout(() => {
                const bar = wrapper.querySelector('.chart-bar');
                bar.style.height = `${Math.max(heightInPx, 8)}px`; // Minimum 8px pour la visibilité
            }, 50);
        });

    } catch (error) {
        console.error("Erreur lors du chargement du graphique :", error);
    }
}