
exports.up = function(knex) {
return knex.schema.createTable("task", tbl => {
    tbl.increments();
    tbl.text("description", 128)
    .notNullable()
    tbl.text("notes", 128)
    tbl.boolean(false)
    .notNullable();
    
}) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("task")
};
