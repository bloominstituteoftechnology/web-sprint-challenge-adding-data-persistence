exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable();
      tbl.integer("completed").default(0);
      tbl.string("project_description", 1000).notNullable();
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 128);
      tbl.integer("completed").default(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 128).notNullable();
      tbl.string("resource_description", 128).notNullable();
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
