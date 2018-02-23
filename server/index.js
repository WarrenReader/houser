const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());


let PORT = 7777;


massive(process.env.CONNECTION_STRING).then(db => {
   app.set('db', db);
   app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})