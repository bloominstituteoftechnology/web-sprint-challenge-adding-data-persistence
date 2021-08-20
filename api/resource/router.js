// build your `/api/resources` router here
const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
	Resources.get()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "There was an error retrieving resources" });
		});
});

router.post("/", (req, res) => {
	Resources.insert(req.body)
		.then((newResource) => {
			res.status(201).json(newResource);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "Error adding new resource" });
		});
});

module.exports = router;
