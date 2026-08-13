const express = require('express');
const router = express.Router();
const login = require('../controllers/authController');
const Stat = require('../controllers/HParkControllers');
const ajout = require('../controllers/ajoutControllers');
// const jjj = require('../controllers/jjj');

router.post('/login', login);
router.get('/Stat', Stat.Stat);
router.get('/Voitures', Stat.Voitures);
router.get('/NumeroParking', Stat.NumeroParking);
router.post('/ajout', ajout.ajout);
router.post('/Sortie', ajout.sortie);
router.get('/historique', Stat.historique);

// router.get('/jjj', jjj);

module.exports = router;