# HPark

HPark est une application web de gestion de parking permettant de suivre les véhicules en stationnement, de gérer les entrées/sorties et de visualiser les données financières sous forme de statistiques dynamiques.

-Fonctionnalités Principales

  *Tableau de Bord Dynamique : Visualisation globale des places occupées/disponibles et des recettes hebdomadaires.
  *Gestion des Véhicules : Enregistrement des entrées et calcul automatique de la durée/tarif.
  *Suivi des Sorties : Clôture du stationnement et calcul du montant total à payer.
  *Statistiques & Graphiques : Bilan financier glissant sur 7 jours.
  *Historique Complet : Consultation de l'intégralité des stationnements terminés.
  *Authentification Sécurisée : Système de connexion/déconnexion par jeton d'accès.

-Technologies Utilisées

  *Backend : Node.js, Express.js
  *Base de données : MySQL (`mysql2`)
  *Frontend : HTML5, CSS3, JavaScript (Vanilla ES6)
  *Contrôle de version : Git & GitHub

-Installation et Configuration

  *Prérequis
      *[Node.js](https://nodejs.org/)
      *Serveur MySQL (ex: XAMPP, WampServer)

  *Dépendances du Projet
      *[express](https://www.npmjs.com/package/express): Framework web pour Node.js gérant le routage, les requêtes HTTP et l'API REST.
      *[mysql2](https://www.npmjs.com/package/mysql2): Pilote MySQL performant avec support des promesses et gestion des pools de connexions.
      *[dotenv](https://www.npmjs.com/package/dotenv): Chargement des variables d'environnement depuis le fichier `.env` (`PORT`, accès BDD, clés). 
      *[bcrypt](https://www.npmjs.com/package/bcrypt): Hachage sécurisé des mots de passe des utilisateurs. 
      *[nodemon](https://www.npmjs.com/package/nodemon): Redémarrage automatique du serveur Node.js lors des modifications de code backend. 
