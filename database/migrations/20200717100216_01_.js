
exports.up = function(knex) {
    return knex.schema
    .table('tasks', tbl => {
        tbl.foreign('project_id')
        .references('id')
        .inTable('project');
    })
    .createTable('project_resources', tbl => {
      tbl.foreign('project_id')
        .references('id')
        .inTable('project');
      tbl.foreign('resource_id')
        .references('id')
        .inTable('resources');
      tbl.primary(['project_id', 'project_resources']);
  })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .table('tasks', tbl => {tbl.dropColumn('project_id')})
      .dropTableIfExists('project_resources')
  };