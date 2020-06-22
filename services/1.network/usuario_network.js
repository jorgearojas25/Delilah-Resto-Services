const express = require("express");
const router = express.Router();
const controller = require("../2.business/usuario_controller");
const response = require("../../network/response");
const auth = require("../../lib/auth");

router.get("/",auth.authorize, (req, res) => {
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

router.post("/signup", (req, res) => {
  controller
    .PostUsuario(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        error,
        409,
        `[usuario_network] ${error}`
      );
    });
});


module.exports = router;
