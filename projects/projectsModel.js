const db = require("../data/db-config");

module.exports = {
	getProjects,
	getProjectByID,
	getProjectTasks,
	getProjectResources,
	createProject,
	addResource,
};

function getProjects() {
	return db("projects");
}

function getProjectByID(id) {
	return db("projects")
		.where({ id })
		.then(([project]) => {
			return getProjectTasks(id).then((tasks) => {
				return getProjectResources(id).then((resources) => {
					return {
						...convertCompleted(project),
						tasks: tasks.map((task) => convertCompleted(task)),
						resources: resources.map((resource) => convertCompleted(resource)),
					};
				});
			});
		});
}

function getProjectTasks(project_id) {
	return db("tasks")
		.select("tasks.id", "tasks.description", "tasks.notes", "tasks.completed")
		.where({ project_id });
}

function getProjectResources(project_id) {
	return db("project_resources")
		.join("resources", "resources.id", "project_resources.id")
		.select("resources.id", "resources.name", "resources.description")
		.where({ project_id });
}

function createProject(project) {
	return db("projects")
		.insert(project)
		.then(([id]) => getProjectByID(id));
}

function addResource(project_id, resource_id) {
	return db("project_resources")
		.insert({ project_id, resource_id })
		.then(() => getProjectResources(project_id));
}

function convertCompleted(obj) {
	return {
		...obj,
		completed: obj.completed ? true : false,
	};
}