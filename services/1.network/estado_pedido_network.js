const express = require("express");
const router = express.Router();
const controller = require("../2.business/estado_pedido_controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .GetListaEstadoPedido()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[estado_pedido_network] ${error}`);
    });
});

module.exports = router;