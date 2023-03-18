const express = require("express");

const router = express.Router();

router.get("/api", async function(req, res) {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

module.exports = router;

