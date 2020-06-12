const express = require("express");

const tasks = require("./tasksModel");

const router = express.Router();

router.get("/", (req, res) => {
	tasks
		.getTasks()
		.then((tasks) => res.status(200).json(tasks))
		.catch((err) => {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		});
});

router.post("/", (req, res) => {
	if (req.body.description && req.body.project_id) {
		tasks
			.createTask(req.body)
			.then((task) => res.status(201).json(task))
			.catch((err) => {
				console.log(err.message);
				res.status(500).json({ error: err.message });
			});
	} else {
		res.status(400).json({ message: "Task must have a description." });
	}
});

module.exports = router;