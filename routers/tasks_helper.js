const db = require("../data/db-config");

function find() {
	return db.select("*").from("tasks");
}

function getById(id) {
	return db("tasks").where("id", id).first();
}

function add(task) {
	return db("tasks")
		.insert(task)
		.then((id) => {
			return getById(id[0]);
		});
}

module.exports = {
	find,
	getById,
	add,
};