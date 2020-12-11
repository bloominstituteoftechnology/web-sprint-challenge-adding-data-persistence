exports.up = function (knex) {
  return knex.schema
    .createTable("Projects", (table) => {
      table.increments("Project_ID");
      table.text("Name", 128).notNullable();
      table.text("Description");
      table
        .integer("Resource_ID")
        .unsigned()
        .notNullable()
        .references("Resource_ID")
        .inTable("Resources");
      table.boolean("Completed").notNullable().defaultTo("false");
    })
    .createTable("Resources", (table) => {
      table.increments("Resource_ID");
      table.text("Name", 128).unique().notNullable();
      table.text("Description");
    })
    .createTable("Task", (table) => {
      table.increments("Task_ID");
      table.text("Description").notNullable();
      table.text("Notes");
      table
        .integer("Project_ID")
        .unsigned()
        .notNullable()
        .references("Project_ID")
        .inTable("Projects");
      table.boolean("Completed").notNullable().defaultTo("false");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Projects")
    .dropTableIfExists("Resource")
    .dropTableIfExists("Task");
};
