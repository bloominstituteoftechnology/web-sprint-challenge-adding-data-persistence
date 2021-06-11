exports.up = function (knex) {
	return knex.schema
		.createTable("projects", (tbl) => {
			tbl.increments("project_id");
			tbl.string("project_name", 64).notNullable();
			tbl.text("project_description");
			tbl.boolean("project_completed").defaultTo(false);
		})
		.createTable("resources", (tbl) => {
			tbl.increments("resource_id");
			tbl.string("resource_name", 64).unique().notNullable();
			tbl.text("resource_description");
		})
		.createTable("tasks", (tbl) => {
			tbl.increments("task_id");
			tbl.text("task_description").notNullable();
			tbl.text("task_notes");
			tbl.boolean("task_completed").defaultTo(false);
			tbl
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("project_id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		})
		.createTable("project_resources", (tbl) => {
			tbl.increments();
			tbl
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("project_id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			tbl
				.integer("resource_id")
				.unsigned()
				.notNullable()
				.references("resource_id")
				.inTable("resources")
				.onDelete("RESTRICT") //assignments must be deleted before resource
				.onUpdate("RESTRICT");
			tbl.decimal("quantity", 3);
			tbl.string("unit");
		});
};
// fixinng git
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("project_resources")
		.dropTableIfExists("tasks")
		.dropTableIfExists("resources")
		.dropTableIfExists("projects");
};
