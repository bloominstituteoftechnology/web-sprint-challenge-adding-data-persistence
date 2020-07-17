
exports.up = function(knex) {
    return knex.schema.createTable("resources", tbl => {
        tbl.increments("id")
        tbl.string("Name", 75).notNullable()
        tbl.string("Description", 300)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources")
  
};
