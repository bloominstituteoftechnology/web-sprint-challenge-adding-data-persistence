// build your `Task` model here
const db = require("../../data/dbConfig");

// join tasks with projects
const find = () => {
	return db("tasks as t")
		.select("t.*", "p.project_name", "p.project_description")
		.join("projects as p", "p.project_id", "t.project_id");
};

const add = (task) => {
	return db("tasks")
		.insert(task)
		.then(([task_id]) => {
			return db("tasks").where({ task_id });
		});
};

module.exports = {
	find,
	add,
};
// fixing git issues
