
exports.up = function(knex) {
    return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('taskName')
          .unique()
          .notNullable();
        tbl.text('taskDescription');
        tbl.boolean('taskCompleted');
        tbl.integer('projects_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projectName')
          .unique()
          .notNullable();
        tbl.text('projectDescription');
        tbl.boolean('completed');
        tbl.integer('resources_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resourceName')
          .unique()
          .notNullable();
        tbl.text('resourceDescription');
    })
    .createTable('projects_resources', tbl => {
        tbl.integer("projects_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete('CASCADE');
        tbl.integer("resources_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE");
        tbl.primary(["projects_id", "resources_id"]);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("projects_resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };
  