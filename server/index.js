// MODULE DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

// FILE DEPENDENCIES
const checkForSession = require(`./middlewares/session.js`);

// APP & APP.USE
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use( session({
   secret: process.env.SECRET,
   resave: false,
   saveUninitialized: true,
}));
app.use(checkForSession);

app.use( express.static( `${__dirname}/../build/` ) );



// CONTROLLERS
const controllers = require('./controllers/controllers.js');


// ENDPOINTS
app.post('/api/login', controllers.login);
app.post('/api/register', controllers.register);




let PORT = 7777;

massive(process.env.CONNECTION_STRING).then(db => {
   app.set('db', db);
   app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})