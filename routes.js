const express = require('express');
const route = express.Router();
const home = require('./controllers/homeController');



route.get('/', home.paginaInicial);

route.post('/', home.trataPost);

module.exports = route;