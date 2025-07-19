const express = require("express");
const path = require("path");
const productRoute = require("./routes/productRoute");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/products", productRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
