exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 255).notNullable();
      tbl.string("project_description", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 255).notNullable().unique();
      tbl.string("resource_description", 255);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 255).notNullable();
      tbl.string("task_notes", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
