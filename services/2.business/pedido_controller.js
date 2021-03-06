const pedidoStore = require("../3.store/pedido_store");
const itemStore = require("../3.store/item_store");
const facturaStore = require("../3.store/factura_store");
const objPedido = require("./BusinessObjects/PedidoBO");
const factura_store = require("../3.store/factura_store");
const GetListaPedidos = (req, res) => {
  return new Promise((resolve, reject) => {
    console.log(req);
    if(req.user.id_rol == 1){
      resolve(pedidoStore.list());
    }else{
      resolve(pedidoStore.userList(req.user.id_usuario))
    }
    
  });
};

const PostPedido = (req, res) => {
  return new Promise(async (resolve, reject) => {
    const cuerpoPedido = new objPedido(
      req.body.id_usuario,
      0,
      new Date(),
      1,
      req.body.id_formas_pago
    );
    const pedido = await pedidoStore.insert(cuerpoPedido);
    console.log(`EL PEDIDO ${JSON.stringify(pedido)}`)
    let valorPedido = await GuardarFactura(req.body.items, pedido);
    cuerpoPedido.valor_total = valorPedido;
    cuerpoPedido.id_pedido = pedido.id_pedido;
    console.log(`${JSON.stringify(cuerpoPedido)}`);
    resolve(pedidoStore.update(cuerpoPedido));
  });
};

const GuardarFactura = async (items, pedido) => {
  let valorTotalPedido = 0;
  for (let index = 0; index < items.length; index++) {
      const item = items[index];
      let db_item = await itemStore.getOne(item.id_item);
    let registro = await facturaStore.insert({
      cantidad: item.cantidad,
      valor_total: db_item.valor * item.cantidad,
      id_pedidos: pedido.id_pedido,
      id_items: db_item.id_item,
    });
    valorTotalPedido += registro.valor_total;
  }
  return valorTotalPedido;
};

const UpdatePedido = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(pedidoStore.update(req.body));
  });
};

const DeletePedido = ((req, res) => {
  return new Promise(async(resolve, reject) => {
    factura_store.deletePedido(req.params.id);
    resolve(pedidoStore.delete(req.params.id));
  })
});

module.exports = {
  GetListaPedidos,
  PostPedido,
  UpdatePedido,
  DeletePedido
};
