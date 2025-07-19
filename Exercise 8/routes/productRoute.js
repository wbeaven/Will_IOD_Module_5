const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/", controller.getProducts);

router.get("/:id", controller.getFilteredProducts);

module.exports = router;
