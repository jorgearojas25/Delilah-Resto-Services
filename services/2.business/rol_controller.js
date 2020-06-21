const rolStore = require('../3.store/rol_store');

const GetListaRoles = () => {
    return new Promise((resolve, reject) => {
        resolve(rolStore.list());
    })
}

module.exports = {
    GetListaRoles
}