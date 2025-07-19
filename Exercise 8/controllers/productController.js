const axios = require("axios");
const FAKE_STORE_URL = "https://fakestoreapi.com";

const getProducts =
    ("/",
    async (req, res) => {
        try {
            const response = await axios.get(`${FAKE_STORE_URL}/products`);
            res.json(response.data);
        } catch (err) {
            res.status(500).json({ error: "Failed to fetch products." });
        }
    });

const getFilteredProducts =
    ("/:id",
    async (req, res) => {
        try {
            const response = await axios.get(`${FAKE_STORE_URL}/products/${req.params.id}`);
            res.json(response.data);
        } catch (err) {
            res.status(500).json({ error: "Product not found." });
        }
    });

module.exports = { getProducts, getFilteredProducts };
