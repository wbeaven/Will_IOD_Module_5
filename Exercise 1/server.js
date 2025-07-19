const express = require("express");

// Server A - running on port 3000
const appA = express();
appA.get("/", (req, res) => {
    res.send("Hello from Server A (Port 3000)");
});
appA.listen(3000, () => {
    console.log("Server A is running on http://localhost:3000");
});

// Server B - running on port 4000
const appB = express();
appB.get("/", (req, res) => {
    res.send("Hello from Server B (Port 4000)");
});
appB.listen(4000, () => {
    console.log("Server B is running on http://localhost:4000");
});

// Server C - running on port 5000
const appC = express();
appC.get("/", (req, res) => {
    res.send("Hello from Server C (Port 5000)");
});
appC.listen(5000, () => {
    console.log("Server C is running on http://localhost:5000");
});
