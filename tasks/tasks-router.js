const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Tasks.getTasks()
		.then((tasks) => {
			res.json(tasks);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get tasks.' });
		});
});

router.post('/', (req, res) => {
	const newTask = req.body;
	Tasks.addTask(newTask)
		.then((task) => {
			res.status(201).json(task);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new task.' });
		});
});

module.exports = router;