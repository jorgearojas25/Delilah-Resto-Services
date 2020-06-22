const db = require("../../lib/db");
const dbClient = new db().connect();
const model = require("../models/factura");

const GetListaFactura = async () => {
  return await model(dbClient).findAll();
};

const PostFactura = async (dataUser) => {
  const factura = model(dbClient).build(dataUser);
  return factura.save();
};

const GetItemById = async (id) => {
    return await model(dbClient).findByPk(id);
}

const DeleteFacturaPedido = async (idPedido) =>{
  return await model(dbClient).destroy({where: {id_pedidos: idPedido}})
}

module.exports = {
  list: GetListaFactura,
  insert: PostFactura,
  getOne: GetItemById,
  deletePedido: DeleteFacturaPedido
};
