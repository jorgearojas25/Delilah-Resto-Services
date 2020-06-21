const db = require("../../lib/db");
const dbClient = new db().connect();
const model = require("../models/usuario");

const GetListaUsuarios = async () => {
  return await model(dbClient).findAll();
};

const PostListaUsuarios = async (dataUser) => {
  const user = model(dbClient).build(dataUser);
  return user.save();
};

const GetUsuarioLogin = async (dataUser) => {
  return await model(dbClient).findOne({
    where: { login: dataUser.login, password: dataUser.password },
  });
};

module.exports = {
  list: GetListaUsuarios,
  insert: PostListaUsuarios,
  login: GetUsuarioLogin,
};
