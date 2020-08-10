
exports.seed = async function(knex) {
	await knex("project").insert([   
		{ name: "Get a new career", description: "Need a new skill to have a new career", completed: true },
    { name: "Buy a new car", description: "Need a car to get a around after I have a job", completed: false },
    { name: "Go on vacation", description: "Who wants to work all the time ...", completed: false },
	])
}