exports.up = function(knex, Promise) {
    return knex.schema
    .createTable("tasks", (tbl) => {
        tbl.increments();
        tbl.string("task_name", 120).notNullable();
        tbl.string("task_desc", 400).notNullable();
        tbl.boolean("completed").notNullable();
        tbl.string("notes", 400).notNullable();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
};