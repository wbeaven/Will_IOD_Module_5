const express = require("express");
const calculatorRoute = require("./routes/calculatorRoute");

const app = express();
const PORT = 3000;

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(express.static("public"));

app.use("/calculator", calculatorRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
