exports.up = function(knex) {
  return(
      knex.schema
        .createTable('projects', tbl => {
          tbl.increments();
          tbl.string('project_name', 255)
            .unique()
            .notNullable();
          tbl.text('project_description');
          tbl.boolean('project_completed')
            .defaultTo(false);
        })
        .createTable('resources', tbl => {
          tbl.increments();
          tbl.string('resource_name', 255)
          tbl.text('resource_description');
        })
        .createTable('tasks', tbl => {
          tbl.increments();
          tbl.text('task_description')
            .notNullable();
          tbl.text('task_notes');
          tbl.boolean('task_completed')
            .defaultTo(false);
          tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        })
        .createTable('project_resources', tbl => {
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
          tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
          tbl.primary(['project_id', 'resource_id']);
        })
  );
};

exports.down = function(knex) {
  return(
      knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
  );
};
