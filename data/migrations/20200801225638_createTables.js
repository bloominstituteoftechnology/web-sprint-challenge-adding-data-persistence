exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments('id');
			tbl.text('name', 130).notNullable();
			tbl.text('description');
			tbl.boolean('isCompleted').notNullable().defaultTo(false);
		})
		.createTable('resources', (tbl) => {
			tbl.increments('id');
			tbl.text('name', 130).notNullable().unique();
			tbl.text('description');
		})
		.createTable('tasks', (tbl) => {
			tbl.increments('id');
			tbl
				.integer('projects_id')
				.unsigned()
				.notNullable()
				.references('projects.id');
			tbl.text('description', 130).notNullable();
			tbl.text('notes');
			tbl.boolean('isCompleted').notNullable().defaultTo(false);
		})
		.createTable('projects_resources', (tbl) => {
			tbl
				.integer('projects_id')
				.unsigned()
				.notNullable()
				.references('projects.id');
			tbl
				.integer('resources_id')
				.unsigned()
				.notNullable()
				.references('resources.id');
			tbl.primary(['projects_id', 'resources_id']);
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('projects_resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
