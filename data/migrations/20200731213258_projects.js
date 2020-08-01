exports.up = async function (knex) {
	await knex.schema.createTable("project", (table) => {
		table.increments("id");
		table.text("name").notNull();
		table.text("description");
		table.bool("completed").defaultTo(false);
	});
	await knex.schema.createTable("tasks", (table) => {
		table.increments("id");
		table
			.integer("project_id")
			.references("id")
			.inTable("project")
			.unsigned()
			.notNullable()
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.text("description").notNull();
		table.text("notes");
		table.bool("completed").defaultTo(false);
	});
	await knex.schema.createTable("resources", (table) => {
		table.increments("id");
		table.text("name").notNull();
		table.text("description");
	});
	await knex.schema.createTable("project_resources", (table) => {
		table
			.integer("project_id")
			.references("id")
			.inTable("project")
			.unsigned()
			.notNullable()
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table
			.integer("resource_id")
			.references("id")
			.inTable("resources")
			.unsigned()
			.notNullable()
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.primary(["project_id", "resource_id"]);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("project_resources");
	await knex.schema.dropTableIfExists("resources");
	await knex.schema.dropTableIfExists("tasks");
	await knex.schema.dropTableIfExists("project");
};