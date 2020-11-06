
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments()
          tbl.string('p_name', 128).notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
  };