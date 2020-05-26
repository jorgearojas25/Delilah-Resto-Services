const rol = require("../services/1.network/rol_network");
const formaPago = require("../services/1.network/forma_pago_network");
const usuario = require("../services/1.network/usuario_network");
const item = require("../services/1.network/items_network");
const pedido = require("../services/1.network/pedido_network");
const login = require("../services/1.network/login_network");

const routes = (server) => {
  server.use("/rol", rol);
  server.use("/formasDePago", formaPago);
  server.use("/usuario", usuario);
  server.use("/item", item);
  server.use("/pedido", pedido);
  server.use("/login", login);
};

module.exports = routes;
