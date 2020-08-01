exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
            .notNullable();
        tbl.string('project_description', 128)
            .notNullable();
        tbl.boolean('project_completion')
            .notNullable()
            .defaultTo("false");
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description')
          .notNullable();
        tbl.string('task_notes');
        tbl.boolean('completed')
          .notNullable()
          .defaultTo('false')
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE').
          onUpdate('CASCADE');
      })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
            .notNullable();
        tbl.string('resource_description')
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references("project.id")
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer("resources_id")
            .unsigned()
            .notNullable()
            .references("resources.id")
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
      .dropTableIfExists('resoures')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
  };
  