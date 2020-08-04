
exports.up = function(knex) {
  return knex.schema.createTable("resource", tbl => {
    tbl.increments();
    tbl.text("name", 128)
    .notNullable()
    tbl.text("description", 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("resource")
};
