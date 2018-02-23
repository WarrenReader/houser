const express = require('express');
const bodyParser = require('body-parser');
// require('dotenv').config();

const app = express();

app.use(bodyParser.json());


let PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Listening on ${PORT}`))