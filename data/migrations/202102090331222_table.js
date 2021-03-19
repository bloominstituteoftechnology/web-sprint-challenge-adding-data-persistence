exports.up = function(knex) {
    return knex.schema
      .createTable('project', tbl => {
          tbl.increments('project_id');
          tbl.text('project_name')
              .notNullable();
          tbl.text('project_description');
          tbl.boolean('project_completed')
              .defaultTo(false)
              .notNullable();
      })
      .createTable('resource', tbl => {
          tbl.increments('resource_id'); 
          tbl.text('resource_name')
              .notNullable()
              .unique();
          tbl.text('resource_description');
      })
      .createTable('task', tbl => {
          tbl.increments('task_id');
          tbl.text('task_description')
              .notNullable();
          tbl.boolean('task_completed')
              .defaultTo(false)
              .notNullable();
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('project')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
      })
  
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('task')
          .dropTableIfExists('resource')
          .dropTableIfExists('project');
  };