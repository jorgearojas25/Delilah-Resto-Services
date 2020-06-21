const express = require("express");
const router = express.Router();
const controller = require("../2.business/forma_pago_controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .GetListaFormasPago()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[forma_pago_network] ${error}`);
    });
});

module.exports = router;