
exports.up = async function(knex) {
    await knex.schema.createTable('project_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
      tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources');
       
       tbl.primary(['project_id', 'resource_id']);
    })
}
    
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('project_resources');
  }
  