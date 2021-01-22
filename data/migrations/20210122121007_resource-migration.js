
exports.up = function(knex) {
  return knex.schema 
    .createTable('resources', tbl => {
        tbl.increments('resource_id').unique()
        tbl.string('resouce_name', 128).unique()
        tbl.string('description')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
};
