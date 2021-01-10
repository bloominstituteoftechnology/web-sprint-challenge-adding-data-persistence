exports.up = async function(knex) {
    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull()
    })
    
    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull()
    })

    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.integer("project_id").notNull().references("id").inTable("project")
    })

    await knex.schema.createTable("project_resource", (table) => {
        table.primary(["project_id", "resource_id"])
        table.integer("project_id").notNull().references("id").inTable("project")
        table.integer("resource_id").notNull().references("id").inTable("resource")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("project_resource");
    await knex.schema.dropTableIfExists("task");
    await knex.schema.dropTableIfExists("resource");
    await knex.schema.dropTableIfExists("project");
};

