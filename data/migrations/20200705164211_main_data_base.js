
exports.up = async function(knex) {
    await knex.schema
        .createTable("tasks", table => {
            table.increments("id")
            table.text("name").notNull().unique()
            table.text("description")
            table.boolean("completed").defaultTo(false)
        })

        .createTable("item", table => {
            table.increments("id")
            table.text("name").notNull().unique()
            table.text("notes")
        })

        .createTable("to_do", table => {
            table.increments("id")
            table.text("description").notNull()
            table.text("notes")
            table.boolean("completed").defaultTo(false)
        })

        .createTable("task_todo", table => {
            table.primary(["tasks_id", "item_id"])
            
            table
            .integer("tasks_id")
            .notNull()
            .references("tasks.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    
            table
            .integer("item_id")
            .notNull()
            .references("items.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("task_todo")
  await knex.schema.dropTableIfExists("to_do")
  await knex.schema.dropTableIfExists("item")
  await knex.schema.dropTableIfExists("tasks")
};


