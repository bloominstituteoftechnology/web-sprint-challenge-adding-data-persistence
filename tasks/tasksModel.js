const db = require("../data/db-config");

module.exports = {
	getTasks,
	getTaskByID,
	createTask,
};

function getTasks() {
	return db("tasks")
		.join("projects", "projects.id", "tasks.project_id")
		.select(
			"tasks.id",
			"tasks.description",
			"tasks.notes",
			"tasks.completed",
			"projects.id as project_id",
			"projects.name as project_name",
			"projects.description as project_description"
		);
}

function getTaskByID(id) {
	return db("tasks").where({ id });
}

function createTask(task) {
	return db("tasks")
		.insert(task)
		.then(([id]) => getTaskByID(id));
}