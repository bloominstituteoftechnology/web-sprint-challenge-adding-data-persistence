//TODO: On personal time: We should have added a completed boolean to this table to, since it makes sense. Add a new column to the table through Knex //

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
