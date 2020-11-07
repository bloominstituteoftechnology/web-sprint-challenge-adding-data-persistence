exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('resources', tbl=>{
      tbl.increments();
      tbl.string('resource_name', 128).notNullable();
      tbl.string('resource_desc', 400).notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema
      .dropTableIfExists('resources')
  
  };