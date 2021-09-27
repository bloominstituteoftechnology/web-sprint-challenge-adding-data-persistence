// build your `/api/tasks` router here
const express = require("express");
const Tasks = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
	await Tasks.get()
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "There was an error retrieving tasks" });
		});
});

router.post("/", (req, res) => {
	Tasks.addTask(req.body)
		.then((task) => {
			res.status(201).json(task);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "Error adding task" });
		});
});

module.exports = router;
