
exports.up = async function(knex) {
await knex.schema.createTable("projects", (table)=>{

    table.increments("id")
    table.text("name").notNull()
    table.text("description")
    table.bool('completed').defaultTo(false)
})

await knex.schema.createTable("resources", (table)=>{

    table.increments('id')
    table.text("name").notNull()
    table.text("description")
})

await knex.schema.createTable("tasks", (table)=>{

    table.increments("id")
    table.text("description")
    table.text("notes")
	table.bool("completed").notNull().defaultTo(false)
	table
	.integer("project_id")
	.unsigned()
	.notNullable()
	.references("projects.id")
	.onDelete("RESTRICT")
	.onUpdate("CASCADE");

})

await knex.schema.createTable("projects_resources", (table)=>{

    table
			.integer("project_id")
			.references("id")
			.inTable("projects")
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
})
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources");
	await knex.schema.dropTableIfExists("resources");
	await knex.schema.dropTableIfExists("tasks");
	await knex.schema.dropTableIfExists("projects");
};
