const rol = require("../services/1.network/rol_network");
const formaPago = require("../services/1.network/forma_pago_network");
const usuario = require("../services/1.network/usuario_network");
const item = require("../services/1.network/items_network");
const pedido = require("../services/1.network/pedido_network");
const login = require("../services/1.network/login_network");
const estado_pedido = require("../services/1.network/estado_pedido_network");
const config = require("../config");

const routes = (server) => {
  server.use(`/${config.version}/rol`, rol);
  server.use(`/${config.version}/formasDePago`, formaPago);
  server.use(`/${config.version}/usuario`, usuario);
  server.use(`/${config.version}/item`, item);
  server.use(`/${config.version}/pedido`, pedido);
  server.use(`/${config.version}/login`, login);
  server.use(`/${config.version}/estadoPedido`, estado_pedido);
};

module.exports = routes;
