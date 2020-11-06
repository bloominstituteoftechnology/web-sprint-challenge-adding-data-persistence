
exports.up = function(knex) {
    return knex.schema
    .createTable("project", (table) => {
        table
            .increments("id")
        table
            .string("name")
            .notNullable()
        table
            .string("description")
        table
            .boolean("completed")
            .notNullable()
            .defaultTo(false)
    })
    .createTable("task", (table) => {
        table
            .increments("id")
        table
            .string("description")
            .notNullable()
        table
            .text("notes")
        table
            .boolean("completed")
            .notNullable().
            defaultTo(false)
        table
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("projects.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
    .createTable("resources", (table) => {
        table
            .increments("id")
        table
            .string("name")
            .notNullable()
            .unique()
        table
            .string("description")
    })
    .createTable('project_resources', (table) => {
        table
            .increments("id")
        table
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("projects.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table
            .integer("resource_id")
            .unsigned()
            .notNullable()
            .references("resources.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
}


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("task")
    .dropTableIfExists("project")
}
