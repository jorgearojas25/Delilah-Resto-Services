const config = require('../config');
const Sequelize = require('sequelize');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const DB_URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}`;

class MySQLConnection{
    constructor(){
        if(!MySQLConnection.connection){
            MySQLConnection.connection = new Sequelize(DB_URI);
            console.log(`[DB] DB ${DB_NAME} conectada con exito! `)
        }
    }   
    connect(){
        return MySQLConnection.connection;
    }
}

module.exports = MySQLConnection;