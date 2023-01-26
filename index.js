const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const data = require("./data/categories.json");

//middleware
app.use(cors());

//news categories api
app.get("/news-categories", (req, res) => {
    res.send(data);
})

app.get("/", (req, res) => {
    res.send("News Portal Server is running");
});

app.listen(port, () => {
    console.log("News portal server running on port", port);
});