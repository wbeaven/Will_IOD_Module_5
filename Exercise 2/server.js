const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoute");

const app = require("./app");
const port = 3000;

app.get("/", (req, res) => {
    res.send("Express server");
});

app.use(express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
    console.log(`Example app listening at
    http://localhost:${port}`);
});
