const express = require("express");
const controller = require("../controllers/calculatorController");
const router = express.Router();

router.get("/add", controller.add);
router.get("/subtract", controller.subtract);
router.get("/divide", controller.divide);
router.get("/multiply", controller.multiply);

module.exports = router;
