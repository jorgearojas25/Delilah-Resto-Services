const db = require('../../lib/db');
const dbClient = new db().connect();
const model = require('../models/estado_pedido');

const GetListaEstadoPedido = async () => {
    return await model(dbClient).findAll();
}

module.exports ={
    list: GetListaEstadoPedido
}