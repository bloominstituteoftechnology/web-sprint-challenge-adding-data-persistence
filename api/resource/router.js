const express = require("express");

const Resource = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
    Resource.getResources()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Resource.getRecipeById(id)
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(404).json({ message: "Could not find resource with given id" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Resource.getInstructions(id)
    .then((instructions) => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "Could not find instructions for given resource" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Failed to get instructions" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Resource.getShoppingList(id)
    .then((list) => {
      if (list.length) {
        res.json(list);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredients for given resource" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Failed to get ingredients" });
    });
});

module.exports = router;