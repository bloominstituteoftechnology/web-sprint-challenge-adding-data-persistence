const db = require("../data/db-config");

function find() {
	return db.select("*").from("tasks");
}

function getById(id) {
	return db("tasks").where("id", id).first();
}

function add(task) {
	return db("tasks")
		.insert(task, 'id')
		.then((id) => {
			return getById(id[0]);
		});
}
function updateTask(id, taskToUpdate) {
	return db("tasks as t").where("t.id", id).update(taskToUpdate)
}
module.exports = {
	find,
	getById,
    add,
    updateTask,
};