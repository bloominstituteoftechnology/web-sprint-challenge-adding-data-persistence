
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 50)
            .notNullable()
        tbl.string("description", 2500)
        tbl.bool("completed")
            .defaultTo(false)
    })

    .createTable("resources", tbl => {
        tbl.increments()
        tbl.integer("project_id")
            .notNullable()
            .references("projects.id")
        tbl.string("name", 50)
            .notNullable()
        tbl.string("description", 2500)
    })

    .createTable("tasks", tbl => {
        tbl.increments()
        tbl.integer("project_id")
            .notNullable()
            .references("projects.id")
        tbl.string("description", 2500)
            .notNullable()
        tbl.string("notes", 2500)
        tbl.bool("completed")
            .defaultTo(false)
    })
};


exports.down = function(knex) {
  knex.schema.dropTableIfExists("tasks")
  knex.schema.dropTableIfExists("resources")
  knex.schema.dropTableIfExists("projects")
};
