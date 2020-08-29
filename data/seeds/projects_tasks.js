

exports.seed = async function(knex) {
	await knex("projects_tasks").insert([
		{ proj_id:1, tsk_id: 1},
		{ proj_id:2, tsk_id: 2},
		{ proj_id:2, tsk_id: 1}
	])
}
