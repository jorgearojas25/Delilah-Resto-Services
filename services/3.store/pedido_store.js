const db = require("../../lib/db");
const dbClient = new db().connect();
const model = require("../models/pedido");

const GetListaPedidos = async () => {
  return await model(dbClient).findAll();
};

const PostPedidos = async (dataUser) => {
  const pedido = model(dbClient).build(dataUser);
  return pedido.save();
};

const UpdatePedido = async (pedido) => {
  return await model(dbClient).update(pedido, {where: {id_pedido : pedido.id_pedido}});
}

module.exports = {
  list: GetListaPedidos,
  insert: PostPedidos,
  update: UpdatePedido
};
