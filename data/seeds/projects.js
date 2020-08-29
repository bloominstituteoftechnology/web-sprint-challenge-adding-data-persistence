
exports.seed = async function(knex) {
	await knex("projects").insert([
		{ project_name: "project1", project_description:"descp1", project_completed: false },
		{ project_name: "project2", project_description:"descp2", project_completed: false},
		{ project_name: "project3", project_description:"descp3", project_completed: false},
	])
}
