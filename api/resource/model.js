// build your `Resource` model here
const db = require("../../data/dbConfig");

const get = () => {
	return db("resources").select("*");
};

const insert = async (resource) => {
	const [resource_id] = await db("resources").insert(resource);

	return {
		resource_id: resource_id,
		resource_name: resource.resource_name,
		resource_description: resource.resource_description,
	};
};

module.exports = { get, insert };
