const db = require("../data/db-config");

function get() {
	return db("project");
}

function getById(id) {
	return db("project").where("id", id).first();
}

function add(project) {
	return db("project")
		.insert(project)
		.then((id) => {
			return getById(id[0]);
		});
}

function getResourceByProject(id) {
	return db("project as p")
		.where("p.id", id)
		.join("project_resources as pr", "pr.project_id", "p.id")
		.join("resources as r", "pr.resource_id", "r.id")
		.select("r.name", "r.description");
}

function getTaskByProject(id) {
	return db("project as p")
		.where("p.id", id)
		.join("tasks as t", "t.project_id", "p.id")
		.select("p.name", "t.description", "t.notes");
}

function deleteProject(id) {
	return db("project as p")
	.where("p.id", id)
	.del()
}

function updateProject(id, projectToUpdate) {
	return db("project as p").where("p.id", id).update(projectToUpdate)
}

module.exports = {
	get,
	getById,
	add,
	getResourceByProject,
	getTaskByProject,
	deleteProject,
	updateProject
};