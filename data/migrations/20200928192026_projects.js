exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments();
        tbl.string("project_name", 128).unique().notNullable();
        tbl.string("project_desc", 255);
        tbl.boolean("completed").notNullable().defaultTo(false);
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("resource_name", 128).unique().notNullable();
        tbl.string("resource_desc", 255);
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("task_name", 128).unique().notNullable();
        tbl.string("task_desc", 255);
        tbl.boolean("completed").notNullable().defaultTo(false);
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks");
};
