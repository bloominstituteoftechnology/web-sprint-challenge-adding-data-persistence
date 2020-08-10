const db = require('../data/db-config.js');

function getTasks() {
	return db('tasks');
}

function findTaskById(id) {
	return db('tasks').where({ id }).first();
}

function addTask(task) {
	return db('tasks')
		.insert(task)
		.then((ids) => {
			return findTaskById(ids[0]);
		});
}

module.exports = {
	getTasks,
	addTask,
	findTaskById,
};