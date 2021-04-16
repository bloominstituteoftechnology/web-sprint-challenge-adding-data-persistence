exports.up = function(knex) {
    return knex.schema
    .createTable("projects", table=>{
        table.increments("project_id")
        table.text("project_name")
            .notNullable()
        table.text("project_description")
        table.boolean("project_completed")
            .defaultTo(0)
    })
    .createTable("resources", table=>{
        table.increments("resource_id")
        table.text("resource_name")
            .notNullable()
            .unique()
        table.text("resource_description")
    })
    .createTable("tasks", table=>{
        table.increments("task_id")
        table.text("task_description")
            .notNullable()
        table.text("task_notes")
        table.boolean("task_completed")
            .defaultTo(0)
        table.integer("project_id")
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable("project_resources", table=>{
        table.increments("assignment_id")
        table.integer("project_id")
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer("resource_id")
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("project_resources")
        .dropTableIfExists("projects")
};
