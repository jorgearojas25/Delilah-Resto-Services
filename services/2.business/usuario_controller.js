const usuarioStore = require('../3.store/usuario_store');

const GetListaUsuarios = () => {
    return new Promise((resolve, reject) => {
        resolve(usuarioStore.list());
    })
}

const PostUsuario = (req, res) => {
    return new Promise(async (resolve, reject) => {
        let valid = await usuarioStore.login(req.body);
        if(valid != null) {
            reject('Este login ya esta en uso intenta usar otro');    
        }
        resolve(usuarioStore.insert(req.body))
    });
}

const Login = (req, res) => {
    return new Promise(async(resolve, reject) => {
        if(!req.body.login || !req.body.password) {
            reject(new Error('No has enviado los parametros de `login` o `password`'));
        }
        let user = await usuarioStore.login(req.body);
        if (!user) {
            resolve('Este usuario no se encuentra en el sistema')
        }
        resolve(user.dataValues);
    })
}

module.exports = {
    GetListaUsuarios,
    PostUsuario,
    Login
}