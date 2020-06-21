const db = require('../../lib/db');
const dbClient = new db().connect();
const model = require('../models/rol');

const GetListaRoles = async () => {
    return await model(dbClient).findAll();
}

module.exports ={
    list: GetListaRoles
}