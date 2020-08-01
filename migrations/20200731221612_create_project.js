
exports.up = function(knex) {
  return knex.schema.createTable("project", tbl => {
      tbl.increments();
      tbl.text("name", 128)
      .notNullable();
      tbl.text("description", 128)
      tbl.boolean(false)
      .notNullable()
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExisit("project")
};
