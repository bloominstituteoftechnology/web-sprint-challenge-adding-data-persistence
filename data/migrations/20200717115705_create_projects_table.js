
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments("id")
        tbl.string("Name", 75).notNullable()
        tbl.string("Description", 300)
        tbl.boolean("Completed").defaultTo("false").notNullable
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects")
  
};
