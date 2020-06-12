const db = require("../data/db-config");

module.exports = {
	getResources,
	getResourceByID,
	createResource,
};

function getResources() {
	return db("resources");
}

function getResourceByID(id) {
	return db("resources").where({ id });
}

function createResource(resource) {
	return db("resources")
		.insert(resource)
		.then(([id]) => getResourceByID(id));
}