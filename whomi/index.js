'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const express = require('express');
const app     = express();

app.set('views', './views');
app.set('view engine', 'pug');

const services = [];

Object.keys(process.env).forEach((envVarKey) => {
    if (envVarKey.startsWith('CF_URL')) {
        services.push({ name: envVarKey, url: process.env[envVarKey] });
    }
});

app.get('/', (req, res) => {
    res.render('index', { services: services });
});

app.listen(1337);

// Exported objects/methods
module.exports = {};