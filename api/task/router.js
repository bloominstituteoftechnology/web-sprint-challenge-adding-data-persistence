// build your `/api/tasks` router here
const express = require("express");
const Tasks = require("./model");

const router = express.Router();

// [GET] all tasks
router.get("/", (req, res, next) => {
	Tasks.find()
		.then((tasks) => {
			res.status(200).json(trueOrFalse(tasks));
		})
		.catch(next);
});

// [POST] a task
router.post("/", (req, res, next) => {
	Tasks.add(req.body)
		.then((task) => {
			//task is an array of one task
			res.status(201).json(trueOrFalse(task)[0]);
		})
		.catch(next);
});

// function to convert integer to boolean
const trueOrFalse = (tasks) => {
	return tasks.map((proj) => ({
		...proj,
		task_completed: proj.task_completed ? true : false,
	}));
};

module.exports = router;
// fixing git issues
