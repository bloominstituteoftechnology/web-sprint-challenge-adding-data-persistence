// build your `Project` model here
const db = require("../../data/dbConfig");

const find = () => {
	return db("projects");
};

const findById = (project_id) => {
	return db("projects").where({ project_id });
};

const add = (project) => {
	return db("projects")
		.insert(project)
		.then(([project_id]) => {
			return findById(project_id);
		});
};

// get all resources for this project
const projectResources = (project_id) => {
	return db("resources as r")
		.join("project_resources as pr", "pr.resource_id", "r.resource_id")
		.where("pr.project_id", project_id);
};

// get list of all project tasks
const projectTasks = (project_id) => {
	return db("tasks as t").where({ project_id });
};

// middleware
const checkId = async (req, res, next) => {
	const { project_id } = req.params;
	const [project] = await findById(project_id);
	if (project) {
		req.project = {
			...project,
			project_completed: project.project_completed ? true : false,
		};
		next();
	} else {
		res
			.status(404)
			.json({ message: `Project with id ${project_id} not found.` });
	}
};

module.exports = {
	find,
	add,
	checkId,
	projectResources,
	projectTasks,
};
