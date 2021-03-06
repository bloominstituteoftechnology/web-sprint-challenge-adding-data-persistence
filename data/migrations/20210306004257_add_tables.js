
exports.up = function(knex) {
  return knex.schema.createTable("Project", tbl => {
      tbl.increments("project_id")
      tbl.text("project_name").notNullable()
      tbl.text("project_description")
      tbl.boolean("project_completed")
  })
  .createTable("Recource", tbl => {
    tbl.increments("recource_id")
    tbl.text("recource_name").unique().notNullable()
    tbl.text("recource_description")  
  })
  .createTable("Task", tbl => {
      tbl.increments("task_id")
      tbl.text("task_description").notNullable()
      tbl.text("task_notes")
      tbl.boolean("task_completed")
      tbl.integer("project_id").unsigned().references("project_id").inTable("Project")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Task")
    .dropTableIfExists("Recource")
    .dropTableIfExists("Project")
};
