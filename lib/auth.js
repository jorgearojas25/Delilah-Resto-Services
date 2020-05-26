const jswt = require('jsonwebtoken');
const config = require('../config');
const sign = config.sign;

const AutenticarUsuario = (req, res, next) => {

}

const OnlyAdminsPaths = (req, res, next) => {

}

const signSomething = (something) => {
    return jswt.sign(something,sign);
}

module.exports = {
    sign: signSomething,
    authenticate: AutenticarUsuario,
    authorize: OnlyAdminsPaths,
}