
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) =>{
        table.increments("project_id")
        table.text("project_name").notNull()
        table.text("project_description")
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

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")

};
