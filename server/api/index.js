const express = require('express')

const routes = express();

const cliente=require('./clientes');
const auto=require('./autos');
const reparacion = require('./reparaciones');

routes.use('/cliente',cliente);
routes.use('/auto',auto);
routes.use('/reparacion',reparacion);


module.exports =routes