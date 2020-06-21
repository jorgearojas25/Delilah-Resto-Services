const express = require("express");
const router = express.Router();
const controller = require("../2.business/rol_controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .GetListaRoles()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[rol_network] ${error}`);
    });
});

module.exports = router;