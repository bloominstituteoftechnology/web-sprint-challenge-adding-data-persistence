exports.seed = function (knex) {
	return knex('projects').insert([
		{
			id: 1,
			name: 'Make a Server',
			description: 'Index and Server File',
			isCompleted: false,
		},
		{
			id: 2,
			name: 'Make a Database',
			description: 'Create Migrations and Tables',
			isCompleted: false,
		},
		{ id: 3, name: 'Make Endpoints', description: '', isCompleted: false },
	]);
};
