const db = require("../data/db-config");

function get() {
	return db.select("*").from("resources");
}

function getById(id) {
	return db("resources").where("id", id).first();
}

function add(resource) {
	return db("resources")
		.insert(resource)
		.then((id) => {
			return getById(id[0]);
		});
}

function getProjectsByResource(id) {
	return db("resources as r")
		.where("r.id", id)
		.join("project_resources as pr", "r.id", "pr.resource_id")
		.join("project as p", "p.id", "pr.project_id")
		.select("p.name", "r.name");
}

// function addResourceToTask(id)

module.exports = {
	get,
	getById,
	add,
	getProjectsByResource,
};