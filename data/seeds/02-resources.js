exports.seed = function (knex) {
	return knex('resources').insert([
		{ id: 1, name: 'VSCode', description: 'A Code Editor' },
		{ id: 2, name: 'SQLite Studio', description: 'A DB GUI' },
		{ id: 3, name: 'PostMan', description: 'An Endpoint Testing Program' },
	]);
};
