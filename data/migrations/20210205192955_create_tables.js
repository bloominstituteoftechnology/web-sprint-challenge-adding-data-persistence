exports.up = function (knex) {
  return knex.schema
    .createTable("project", (table) => {
      table.increments().primary().unique().notNullable();
      table.string("name").notNullable();
      table.text("description");
      table.boolean("copleted").notNullable().defaultTo(false);
    })
    .createTable("resource", (table) => {
      table.increments().primary().unique().notNullable();
      table.string("name").notNullable().unique();
      table.text("description");
    })
    .createTable("task", (table) => {
      table.increments().primary().unique().notNullable();
      table.string("description").notNullable();
      table.text("notes");
      table.boolean("completed").notNullable().defaultTo(false);
      table.foreign("project_id").references("id").inTable("project");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task");
};
