// build your `Project` model here
const db = require("../../data/dbConfig");

const get = async () => {
	const projects = await db("projects").select("*");

	const projectsObject = projects.map((project) => {
		return {
			project_id: project.project_id,
			project_name: project.project_name,
			project_description: project.project_description,
			project_completed: project.project_completed === 0 ? false : true,
		};
	});
	return projectsObject;
};

const insert = async (project) => {
	const [project_id] = await db("projects").insert(project);

	return {
		project_id: project_id,
		project_name: project.project_name,
		project_description: !project.project_description ? null : project.project_description,
		project_completed: project.project_completed === 1 ? true : false,
	};
};

module.exports = {
	get,
	insert,
};
