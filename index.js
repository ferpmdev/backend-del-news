const path = require('path');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');
const { patch } = require('./routes/auth');

const app = express();
dbConnection();
app.use(cors())
app.use( express.static('public') );
app.use( express.json() );

//* ROUTES
app.use('/api/auth', require('./routes/auth') );
app.use('/api/articles', require('./routes/articles') );

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});