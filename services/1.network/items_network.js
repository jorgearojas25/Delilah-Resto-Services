const express = require("express");
const router = express.Router();
const controller = require("../2.business/item_controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .GetListaItems()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[item_network] ${error}`);
    });
});

router.post("/", (req, res) => {
  controller
    .PostItem(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[item_network] ${error}`);
    });
});

router.put("/", (req, res) => {
  controller
    .UpdateItem(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[item_network] ${error}`);
    });
});

router.delete('/:id', async (req, res) => {
    controller
    .DeleteItem(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[item_network] ${error}`);
    });
})

module.exports = router;
