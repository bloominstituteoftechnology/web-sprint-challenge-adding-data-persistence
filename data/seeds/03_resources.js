
exports.seed = async function (knex) {
	await knex("resources").then(function () {
		return knex("resources").insert([
			{ name: "laptop", description: "computer resource" },
			{ name: "cats", description: "as antistress resource" },
			{ name: "phone" },
			{ name: "money" },
		]);
	});
};