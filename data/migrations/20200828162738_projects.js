
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) =>{
        table.increments("project_id")
        table.text("project_name").notNull()
        table.text("project_description")
        table.boolean("project_completed").notNull().defaultTo(false)
    })

    await knex.schema.createTable("resources", (table) =>{
        table.increments("resource_id")
        table.text("resource_name").notNull()
        table.text("resource_description")
    })

    await knex.schema.createTable("tasks", (table) =>{
        table.increments("task_id")
        table.text("task_description").notNull()
        table.text("task_note")
        table.boolean("task_completed").notNull().defaultTo(false)
    })

    await knex.schema.createTable("projects_tasks", (table) =>{
        table.integer("proj_id")
            .notNull()
            .references("project_id")
            .inTable("projects")
        table.integer("tsk_id")
            .notNull()
            .references("task_id")
            .inTable("tasks")

        table.primary(["proj_id", "tsk_id"])
    })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")

};
