exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments('project_id');
      tbl.string("project_name", 128).notNullable();
      tbl.text("project_description");
      tbl.boolean("project_completed").notNullable();
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name").notNullable().unique();
      tbl.text("resource_decription");
    })
    .createTable("task", (tbl) => {
      tbl.increments('task_id');
      tbl.text("task_description").notNullable().unique();
      tbl.text("task_notes");
      tbl.boolean("task_completed");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments('project_resource_id');
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExist('project_resources')
    .dropTableIfExist("task")
    .dropTableIfExist("resources")
    .dropTableIfExist("projects");
};
