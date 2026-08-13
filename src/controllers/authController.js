const User = require('../models/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { matriculation, password } = req.body;

    if (!matriculation || !password) {
        return res.status(400).json({ message: 'Veuillez fournir une matriculation et un mot de passe.' });
    }

    try {
        const user = await User.findByImmatriculation(matriculation);

        if (!user) {
            return res.status(401).json({ message: 'N° de matriculation ou mot de passe incorrect.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Mot de passe fourni :', isMatch);
        if (!isMatch) {
            return res.status(401).json({ message: 'N° de matriculation ou mot de passe incorrect.' });
        }

        res.status(200).json({
            user: {
                id: user.id,
                immatriculation: user.matriculation
            }
        });

    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
};

module.exports =  login ;