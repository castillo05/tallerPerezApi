const express = require('express')

const routes = express();

const cliente=require('./clientes');
const auto=require('./autos');

routes.use('/cliente',cliente);
routes.use('/auto',auto);


module.exports =routes