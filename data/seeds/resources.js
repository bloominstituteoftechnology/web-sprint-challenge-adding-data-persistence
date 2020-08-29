
exports.seed = async function(knex) {
	await knex("resources").insert([
		{ resource_name: "res1", resource_description:"res1" },
		{ resource_name: "res2", resource_description:"res2" },
		{ resource_name: "res3", resource_description:"res3" },
	])
}