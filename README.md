# HPark

HPark est une application web de gestion de parking permettant de suivre les véhicules en stationnement, de gérer les entrées/sorties et de visualiser les données financières sous forme de statistiques dynamiques.

-Fonctionnalités Principales </br>

  *Tableau de Bord Dynamique : Visualisation globale des places occupées/disponibles et des recettes hebdomadaires.</br>
  *Gestion des Véhicules : Enregistrement des entrées et calcul automatique de la durée/tarif.</br>
  *Suivi des Sorties : Clôture du stationnement et calcul du montant total à payer.</br>
  *Statistiques & Graphiques : Bilan financier glissant sur 7 jours.</br>
  *Historique Complet : Consultation de l'intégralité des stationnements terminés.</br>
  *Authentification Sécurisée : Système de connexion/déconnexion par jeton d'accès.</br>

-Technologies Utilisées

  *Backend : Node.js, Express.js</br>
  *Base de données : MySQL (`mysql2`)</br>
  *Frontend : HTML5, CSS3, JavaScript (Vanilla ES6)</br>
  *Contrôle de version : Git & GitHub</br>

-Installation et Configuration

  *Prérequis</br>
      *[Node.js](https://nodejs.org/)</br>
      *Serveur MySQL (ex: XAMPP, WampServer)</br>

  *Dépendances du Projet</br>
      *[express](https://www.npmjs.com/package/express): Framework web pour Node.js gérant le routage, les requêtes HTTP et l'API REST.</br>
      *[mysql2](https://www.npmjs.com/package/mysql2): Pilote MySQL performant avec support des promesses et gestion des pools de connexions.</br>
      *[dotenv](https://www.npmjs.com/package/dotenv): Chargement des variables d'environnement depuis le fichier `.env` (`PORT`, accès BDD, clés). </br>
      *[bcrypt](https://www.npmjs.com/package/bcrypt): Hachage sécurisé des mots de passe des utilisateurs. </br>
      *[nodemon](https://www.npmjs.com/package/nodemon): Redémarrage automatique du serveur Node.js lors des modifications de code backend. </br>
