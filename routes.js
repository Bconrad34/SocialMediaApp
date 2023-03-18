const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
    console.log("Welcome to the social media app home page");
    res.render("index");
});

module.exports = router;

