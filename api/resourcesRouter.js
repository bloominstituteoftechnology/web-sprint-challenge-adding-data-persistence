const router = require("express").Router();

const Resources = require("./resourcesModel");

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      if (resources) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ message: "We don't have any resources" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  Resources.addResource(data)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;