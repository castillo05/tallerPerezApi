require('dotenv').config({override:true});
const path = require('path')

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const BASE_PATH = path.join(__dirname, 'server', 'db');

const options = {
    client:'mysql',
    connection:{
            host: DB_HOST,
			user: DB_USER,
			password: DB_PASSWORD,
			database: DB_DATABASE
    },
    migrations:{
        directory: path.join(BASE_PATH, 'migrations')
    },
    seeds:{
        directory: path.join(BASE_PATH, 'seeds')
    }
}

module.exports=options;