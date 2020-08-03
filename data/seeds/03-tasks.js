exports.seed = function (knex) {
	return knex('tasks').insert([
		{
			id: 1,
			projects_id: 1,
			description: 'index file',
			notes: 'choose a port',
			isCompleted: false,
		},
		{
			id: 2,
			projects_id: 1,
			description: 'server file',
			notes: 'do not forget to export',
			isCompleted: false,
		},
		{
			id: 3,
			projects_id: 2,
			description: 'migrations',
			notes: 'make tables',
			isCompleted: false,
		},
		{
			id: 4,
			projects_id: 2,
			description: 'seeds',
			notes: 'make data',
			isCompleted: false,
		},
		{
			id: 5,
			projects_id: 3,
			description: 'model',
			notes: 'make promises to the database to help',
			isCompleted: false,
		},
		{
			id: 6,
			projects_id: 3,
			description: 'router',
			notes: 'take starter functions and make specifics',
			isCompleted: false,
		},
	]);
};
