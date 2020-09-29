exports.up = function (knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("id");
      tbl.string("project_name").notNullable();
      tbl.string("project_description");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments("id");
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      tbl.string("task").notNullable();
      tbl.string("task_description").notNullable();
      tbl.boolean("completed").defaultTo(false)
    })
    .createTable("resources", tbl => {
      tbl.increments("id");
      tbl.string("resource_name").notNullable();
      tbl.string("description");
    })
    .createTable("required_resources", tbl => {
      tbl.increments("id");
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      tbl.string("resource_name")
        .unsigned()
        .notNullable()
        .references("resource_name")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects", "tasks", "resources", "required_resources")
};