const knex= require('knex');
const connection= require('../../knexfile');

const knexConnection = knex(connection);
knexConnection ? console.log('Connected to mysql') : '';
module.exports =knexConnection;