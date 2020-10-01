const express = require("express");
const db = require("./resourceModel");
const router = express.Router();

router.get("/", (req, res) => {
    db.find()
        .then((items) => {
            res.status(200).json(items);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error finding resources" });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then((item) => {
            if (item) {
                res.status(200).json(item);
            } else {
                res
                    .status(404)
                    .json({ message: "Error finding resource with this ID" });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Error finding resources" });
        });
});

router.post("/", (req, res) => {
    const newResource = req.body;
    db.add(newResource)
        .then((item) => {
            res.status(201).json(item);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error adding resource" });
        });
});

router.post("/addToProject", (req, res) => {
    const resourceData = req.body;
    db.addToProject(resourceData)
        .then((item) => {
            res.status(201).json(item);
        })
        .catch((err) => {
            res.status(500).json({ message: "Could not add resource to project" });
        });
});

module.exports = router;