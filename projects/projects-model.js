const db = require('../data/db-config.js');

function getProjects() {
	return db('projects');
}

function findProjectById(id) {
	return db('projects').where({ id }).first();
}

function addProject(project) {
	return db('projects')
		.insert(project)
		.then((ids) => {
			return findProjectById(ids[0]);
		});
}

async function findAllForProject(id) {
	const projects = await db('projects').select('*').where({ 'projects.id': id });
	const tasks = await db('tasks').select('*').where({ project_id: id });
	const resources = await db('resources')
		.select('*')
		.join('projects_resources', 'projects_resources.resource_id', 'resources.id')
		.where({ 'projects_resources.project_id': id });

	const result = [...projects, { tasks }, { resources }];

	return result;
}

module.exports = {
	getProjects,
	findProjectById,
	addProject,
	findAllForProject,
};