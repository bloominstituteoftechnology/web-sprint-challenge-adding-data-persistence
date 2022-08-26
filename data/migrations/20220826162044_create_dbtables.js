
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name').notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed').defaultTo('false');
    })

   .createTable('resources', tbl => {
       tbl.increments('resources_id');
       tbl.string('resource_name').notNullable().unique();
       tbl.string('resource_description');
   })












  
};


exports.down = function(knex) {
  
};
