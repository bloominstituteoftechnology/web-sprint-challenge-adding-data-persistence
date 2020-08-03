const { table } = require("../dbConfig");

exports.up = function (knex) {
  return knex.schema
  .createTable("resources", (tbl) => {
    tbl.increments().unique();
    tbl.text("name", 128).notNullable();
    tbl.text("description", 256)
  })
  .createTable("projects", (tbl) => {
    tbl.increments().unique();
    tbl.text("name", 128).unique().notNullable();
    tbl.text("description")
    tbl.boolean("completed").default(false)
  })
    .createTable("tasks", tbl => {
      tbl.increments().unique();
      tbl.text("description", 128).notNullable()
      tbl.boolean("completed").default(false)
      tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    })
    .createTable("resource_list", (tbl) => {
      tbl.unique(["project_id","task_id", "resource_id"]).primary()
      ;
      tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      tbl
      .integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    })


  ;
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("resource_list")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
  .dropTableIfExists("resources");
};
