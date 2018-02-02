/*
Importer les dépendances
*/
const express = require('express');
const path = require('path');
const ejs = require('ejs');
//


const frontRoute = require('./routes/front');

/*
Initialiser le serveur
*/
const app = express();
const port = process.env.PORT || 3000;
//

     //configurer le dossier des vues clients
     app.set('views',__dirname + '/www');
     app.use( express.static(path.join(__dirname, 'www')) );

     




/*
Lancer le serveur
*/
app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}`) );
//