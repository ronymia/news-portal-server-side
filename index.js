const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

// data import
const categories = require("./data/categories.json");
const news = require("./data/news.json");

//news categories api
app.get("/news-categories", (req, res) => {
    res.send(categories);
})

// category base api
app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    } else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

// single news api
app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

// Home Page
app.get("/", (req, res) => {
    res.send("News Portal Server is running");
});

// testing port rinning
app.listen(port, () => {
    console.log("News portal server running on port", port);
});