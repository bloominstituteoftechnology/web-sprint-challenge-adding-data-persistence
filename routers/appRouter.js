const express = require("express");
const server = express();
const appModel = require("./appModel");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//GET🏄🏽‍♂️ Test your Route
server.get("/test", async (req, res, next) => {
  try {
    res.json({ message: "working" });
  } catch (error) {
    next(error);
  }
});

// Get All Items/Resources  ✅
server.get("/items", async (req, res, next) => {
  try {
    const item = await appModel.getItem();
    if (item.length === 0) {
      return res.status(404).json({
        message: "Task does not exist, create it?",
      });
    } else {
      res.json(item);
    }
  } catch (error) {
    next(error);
  }
});

// Get All Items/Resources by :id ✅
server.get("/item/:id", (req, res) => {
  const { id } = req.params;

  appModel
    .findItemById(id)
    .then((scheme) => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

//Post new Item/Resource

server.post("/", (req, res) => {
  const itemData = req.body;

  appModel.addItem(itemData)
    .then((scheme) => {
      res.status(201).json(scheme);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new Item" });
    });
});

//export your router
module.exports = server;
