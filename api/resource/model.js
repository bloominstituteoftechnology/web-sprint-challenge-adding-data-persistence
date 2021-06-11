// build your `Resource` model here
const db = require("../../data/dbConfig");

const find = () => {
	return db("resources");
};

const findById = (resource_id) => {
	return db("resources").where({ resource_id }).first();
};

const add = (resource) => {
	return db("resources")
		.insert(resource)
		.then(([resource_id]) => {
			return findById(resource_id);
		});
};

const projectsUsing = (resource_id) => {
	return db("projects as p")
		.join("project_resources as pr", "pr.project_id", "p.project_id")
		.where("pr.resource_id", resource_id);
};

// middleware
const checkId = async (req, res, next) => {
	const { resource_id } = req.params;
	const [resource] = await findById(resource_id);
	if (resource) {
		req.resource = resource;
		next();
	} else {
		res
			.status(404)
			.json({ message: `Resource with id ${resource_id} not found.` });
	}
};

module.exports = {
	find,
	findById,
	add,
	projectsUsing,
	checkId,
};
// fixing git issues
