const express = require("express");
const router = express.Router();
const controller = require("../2.business/usuario_controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .GetListaUsuarios()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        `[usuario_network] ${error}`
      );
    });
});

router.post("/", (req, res) => {
  controller
    .PostUsuario(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        `[usuario_network] ${error}`
      );
    });
});


module.exports = router;
