exports.seed = async function(knex) {
	await knex("tasks").insert([
		{ task_description:"task1", task_note:"tasknote1", task_completed:false},
		{ task_description:"task2", task_note:"tasknote2", task_completed:false},
		{ task_description:"task3", task_note:"tasknote3", task_completed:false}
	])
}