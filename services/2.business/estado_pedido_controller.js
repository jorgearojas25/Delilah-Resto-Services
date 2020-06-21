const formaPagoStore = require('../3.store/estado_pedido_store');

const GetListaEstadoPedido = () => {
    return new Promise((resolve, reject) => {
        resolve(formaPagoStore.list());
    })
}

module.exports = {
    GetListaEstadoPedido
}