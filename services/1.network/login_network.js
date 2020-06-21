const express = require("express");
const router = express.Router();
const controller = require("../2.business/usuario_controller");
const response = require("../../network/response");
const security = require("../../lib/auth");

router.post("/", (req, res) => {
  controller
    .Login(req, res)
    .then((data) => {
      response.success(req, res, security.sign(data), 200);
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
