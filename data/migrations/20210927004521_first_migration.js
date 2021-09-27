exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable().unique();
      table.string("project_description");
      table.integer("project_completed").unsigned();
    })

    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 128).notNullable().unique();
      table.string("resource_description");
    })

    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description").notNullable().unique();
      table.string("task_notes");
      table.integer("task_completed").unsigned();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })

    .createTable("project_resources", (table) => {
      table.increments("project_resources_id");
      table
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("task_id")
        .inTable("tasks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("resources_id")
        .unsigned()
        .notNullable()
        .references("resources_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
