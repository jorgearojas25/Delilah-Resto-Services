const formaPagoStore = require('../3.store/forma_pago_store');

const GetListaFormasPago = () => {
    return new Promise((resolve, reject) => {
        resolve(formaPagoStore.list());
    })
}

module.exports = {
    GetListaFormasPago
}