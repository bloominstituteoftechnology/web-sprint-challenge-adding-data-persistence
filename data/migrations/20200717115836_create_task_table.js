
exports.up = function(knex) {
    return knex.schema.createTable("tasks", tbl => {
        tbl.increments("id")
        tbl.string("Description", 300).notNullable()
        tbl.string("Notes", 300)
        tbl.boolean("Completed").defaultTo("false").notNullable
        tbl.integer("project_id")
        tbl.foreign("project_id").references("projects.id")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks")
  
};
