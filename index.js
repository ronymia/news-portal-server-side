const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

app.get("/", (req, res) => {
    res.send("News Portal Server is running");
});

app.listen(port, () => {
    console.log("News portal server running on port", port);
});