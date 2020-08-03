const db = require('../../data/dbConfig');

const find = () => {
	return db('projects');
};

const findById = (id) => {
	return db('projects').where({ id }).first();
};

const add = (project) => {
	return db('projects')
		.insert(project)
		.then((ids) => {
			return findById(ids[0]);
		});
};
//Join Statement Come Back
const findTask = (projects_id) => {
	return db
		.select('t.*', 'p.name as project_name', 'p.description as project_desc')
		.from('tasks as t')
		.join('projects as p', 't.projects_id', 't.id')
		.orderBy('t.id');
};

const addTask = (task) => {
	return db('tasks')
		.insert(task)
		.then((ids) => {
			return findById(ids[0]);
		});
};

module.exports = {
	find,
	findById,
	add,
	findTask,
	addTask,
};
