
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", (projects) => {
            projects.increments("id");
            projects.string("name", 255).notNullable();
            projects.text("description");
            projects.boolean("completed").notNullable().defaultTo(false);
        })
        .createTable("tasks", (tasks) => {
            tasks.increments("id");
            tasks.text("description").notNullable();
            tasks.text("notes");
            tasks.boolean("completed").notNullable().defaultTo(false);
            tasks
                .integer("project_id")
                .notNullable()
                .references("projects.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
        .createTable("resources", (resources) => {
            resources.increments("id");
            resources.string("name", 255).notNullable();
            resources.text("description");
        })
        .createTable("project_resources", (project_resources) => {
			project_resources.increments("id");
			project_resources
				.integer("project_id")
				.notNullable()
				.references("projects.id")
				.onDelete("RESTRICT")
				.onUpdate("CASCADE");
			project_resources
				.integer("resource_id")
				.notNullable()
				.references("resources.id")
				.onDelete("RESTRICT")
				.onUpdate("CASCADE");
		});
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
		.dropTableIfExists("resources")
		.dropTableIfExists("tasks")
		.dropTableIfExists("projects");
};
