
exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
      tbl.increments()
      tbl.string('resource_name').notNullable()
      tbl.text('resource_details')
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources'); 
};
