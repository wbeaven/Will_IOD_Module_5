const express = require("express");
const router = express.Router();
const Calculator = require("../libraries/Calculator");
const calc = new Calculator();

router.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calc.add(num1, num2);
    res.json({ result });
});

router.get("/subtract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calc.subtract(num1, num2);
    res.json({ result });
});

router.get("/multiply", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calc.multiply(num1, num2);
    res.json({ result });
});

router.get("/divide", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calc.divide(num1, num2);
    res.json({ result });
});

module.exports = router;
