
exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ project_id: 1, name: "computer", description: "" },
    { project_id: 1, name: "school", description: "" },
    { project_id: 2, name: "applications", description: "from jobs I want" },
    { project_id: 2, name: "pens", description: "" },
    { project_id: 3, name: "ring", description: "ring to propose" },
    { project_id: 3, name: "money", description: "money for dinners" },
	])
}
