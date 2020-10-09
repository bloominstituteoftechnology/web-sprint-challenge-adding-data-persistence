exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id");
      table.string("name").unique().notNullable();
      table.text("description");
      table.boolean("completed").defaultTo(0);
    })
    .createTable("tasks", (table) => {
      table.increments("id");
      table.text("description").notNullable()
      table.text('notes')
      table
        .integer("project_id")
        .unsigned()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table.boolean("completed").defaultTo(0);
    })
    .createTable("resources", (table) => {
      table.increments("id");
      table.string("name").unique().notNullable();
      table.text("description");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
