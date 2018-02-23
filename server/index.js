const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// CONTROLLERS
const registerUser = require('./controllers/registerUser.js');


// ENDPOINTS
app.post('/api/register', registerUser.register);




let PORT = 7777;

massive(process.env.CONNECTION_STRING).then(db => {
   app.set('db', db);
   app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})