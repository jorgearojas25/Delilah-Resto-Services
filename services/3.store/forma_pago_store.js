const db = require('../../lib/db');
const dbClient = new db().connect();
const model = require('../models/forma_pago');

const GetListaFormasDePago = async () => {
    return await model(dbClient).findAll();
}

module.exports ={
    list: GetListaFormasDePago
}