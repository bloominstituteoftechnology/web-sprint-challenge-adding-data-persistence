exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 100).notNullable();
      table.string("project_description", 300);
      table.boolean("project_completed", false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 100).unique().notNullable();
      table.string("resource_description", 300);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description", 300).notNullable();
      table.string("task_notes", 300);
      table.boolean("task_completed", false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
    })
    .createTable("project_resources", (table) => {
      table.increments("project-resources_id");
      table.integer("project_id");
      table.integer("resource_id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
