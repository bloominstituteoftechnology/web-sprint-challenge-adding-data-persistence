// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.post("/", (req, res) => {
	Projects.insert(req.body)
		.then((newProject) => {
			res.status(201).json(newProject);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "Error adding new project" });
		});
});

router.get("/", async (req, res) => {
	Projects.get()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "There was an error retrieving projects" });
		});
});

module.exports = router;
