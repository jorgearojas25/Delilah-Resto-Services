const express = require("express");
const router = express.Router();
const controller = require("../2.business/pedido_controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .GetListaPedidos()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[pedido_network] ${error}`);
    });
});

router.post("/", (req, res) => {
  controller
    .PostPedido(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[pedido_network] ${error}`);
    });
});

router.put("/", (req, res) => {
  controller
    .UpdatePedido(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[pedido_network] ${error}`);
    });
});


module.exports = router;
