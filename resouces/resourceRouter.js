const express = require('express');
const resources = require("./resourceModel");
const router = express.Router();

router.get("/", (req, res) => {
    
    resources.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            handleError(err, res);
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    resources.getById(id)
    .then(resource => {
        if (project) {
          res.json(resource);
        } else {
          res.status(404).json({ message: 'Could not find resource with given id.' })
        }
      })
        .catch(err => {
            handleError(err, res);
        });
});


router.post("/", (req, res) => {
    const resourceInfo = req.body;

   resources.add(resourceInfo)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        handleError(err, res);
    });
});



function handleError(err, res) {
    console.log("error", err);
    res.status(500).json({ message: err.message });
}


module.exports = router;