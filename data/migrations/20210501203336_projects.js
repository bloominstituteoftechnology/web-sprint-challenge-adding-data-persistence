
exports.up = function(knex) {
    return (
        knex.schema
          .createTable('projects', tbl => {
              tbl.increments('project_id');
  
              tbl.string('project_name', 150).notNullable();
  
              tbl.string('project_description').nullable();
  
              tbl.boolean('project_completed').defaultTo(0);
          })
          .createTable('resources', tbl => {
              tbl.increments('resource_id');
  
              tbl.string('resource_name').unique().notNullable();
  
              tbl.string('resource_description').nullable();
  
          })
          .createTable('tasks', tbl => {
              tbl.increments('task_id');
  
              tbl.string('task_description', 1024).notNullable();
  
              tbl.string('task_notes', 1024).nullable();
  
              tbl.boolean('task_completed').defaultTo(0);
  
              tbl.integer('project_id')
                  .unsigned()
                  .notNullable()
                  .references('projects.project_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })
          .createTable('project_resources', tbl => {
              tbl.increments('pr_id');
  
              tbl.integer('project_id')
                  .unsigned()
                  .notNullable()
                  .references('projects.project_id')
                  .onDelete('RESTRICT')
                  .onUpdate('CASCADE');
  
              tbl.integer('resource_id')
                  .unsigned()
                  .notNullable()
                  .references('resources.resource_id')
                  .onDelete('RESTRICT')
                  .onUpdate('CASCADE');
  
  
              tbl.integer('task_id')
                  .unsigned()
                  .notNullable()
                  .references('tasks.task_id')
                  .onDelete('RESTRICT')
                  .onUpdate('CASCADE');
          })
    )
  
};

exports.down = function(knex) {
    return (
        knex.schema
          .dropTableIfExists('project_resources')
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects')
    );
  
};
