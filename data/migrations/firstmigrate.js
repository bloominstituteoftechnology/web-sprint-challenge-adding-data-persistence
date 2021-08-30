exports.up = function(knex) {

      return knex.schema
  
      .createTable('projects', table => {
  
          table.increments('project_id')
  
          table.string('project_name', 128).notNullable()
  
          table.string('project_description')
  
          table.boolean('project_completed').defaultTo(0).notNullable()
  
      })
  
      .createTable('resources', table => {
  
          table.increments('resource_id')
  
          table.string('resource_name', 128).notNullable().unique()
  
          table.string('resource_description', 2000)
  
      })
  
      .createTable('tasks', table => {
  
          table.increments('task_id')
  
          table.string('task_description', 2000).notNullable()
  
          table.string('task_notes', 2000)
  
          table.boolean('task_completed').defaultTo(0).notNullable()
  
          table.integer('project_id')
  
          .unsigned()
  
          .notNullable()
  
          .references('project_id')
  
          .inTable('projects')
  
          .onDelete('RESTRICT')
  
      })
  
      .createTable('resource_assignments', table => {
  
          table.increments('resource_assignment_id')
  
          table.integer('resource_id')
  
          .unsigned()
  
          .notNullable()
  
          .references('resource_id')
  
          .inTable('resources')
  
          .onDelete('RESTRICT')
  
          table.integer('project_id')
  
          .unsigned()
  
          .notNullable()
  
          .references('project_id')
  
          .inTable('projects')
  
          .onDelete('RESTRICT')
  
      })
  
    };
  
    
  
    exports.down = function(knex) {
  
      return knex.schema
  
      .dropTableIfExists('resource_assignments')
  
      .dropTableIfExists('tasks')
  
      .dropTableIfExists('resources')
  
      .dropTableIfExists('projects')
  
    };
  