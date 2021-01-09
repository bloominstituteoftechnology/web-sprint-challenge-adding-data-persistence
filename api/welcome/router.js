const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        res.json({
            Message: "Welcome to Sprint-2"
        })
    } catch (err) {
        next(err);
    }
})

module.exports = router;