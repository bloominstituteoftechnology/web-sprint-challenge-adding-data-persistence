const db = require('../data/db-config.js');

function getResources() {
	return db('resources');
}

function findResourcById(id) {
	return db('resources').where({ id }).first();
}

function addResources(resource) {
	return db('resources')
		.insert(resource)
		.then((ids) => {
			return findResourcById(ids[0]);
		});
}

module.exports = {
	getResources,
	findResourcById,
	addResources,
};