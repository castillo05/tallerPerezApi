const express = require('express')

const routes = express();

const cliente=require('./clientes');

routes.use('/cliente',cliente);


module.exports =routes