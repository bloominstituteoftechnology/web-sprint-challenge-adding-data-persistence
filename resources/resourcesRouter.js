const express = require("express");

const resources = require("./resourcesModel");

const router = express.Router();

router.get("/", (req, res) => {
	resources
		.getResources()
		.then((resources) => res.status(200).json(resources))
		.catch((err) => {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		});
});

router.post("/", (req, res) => {
	if (req.body.name) {
		resources
			.createResource(req.body)
			.then((resource) => res.status(201).json(resource))
			.catch((err) => {
				console.log(err.message);
				res.status(500).json({ error: err.message });
			});
	} else {
		res.status(400).json({ message: "Resource must have a name." });
	}
});

module.exports = router;