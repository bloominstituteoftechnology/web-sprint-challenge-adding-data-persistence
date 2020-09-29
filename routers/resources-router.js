const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resources = await db("resources")

    if (resources) {
      res.status(200).json(resources);
    };
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const resource = await db("resources").where({
      id
    });

    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(500).json({
        message: "There was a server error fulfilling your request"
      })
    }
  } catch (err) {
    res.status(404).json({
      message: `The resource with id '${id}' does not exist`
    })
  };
});

router.post("/", async (req, res) => {
  const newResource = req.body;
  try {
    const addResource = await db("resources").insert(newResource);

    if (addResource) {
      res.status(201).json(addResource);
    } else {
      res.status(500).json({
        message: "There was a server error fulfilling your request"
      });
    };
  } catch (err) {
    res.status(400).json({
      message: "Please provide all required fields"
    });
  };
});

module.exports = router;