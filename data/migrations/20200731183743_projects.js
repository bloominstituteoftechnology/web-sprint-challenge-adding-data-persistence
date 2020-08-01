const { table } = require("../db-config");

exports.up = function(knex) {
  return(
      knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 255)
                .notNullable()
                .unique();
            tbl.string('projectEase', 255)
                .notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('task_steps')
                .notNullable()
                .unique();
            tbl.integer('numberOfSteps')
                .notNullable();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 255)
                .notNullable()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('task.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
  )
};

exports.down = function(knex) {
  return(
      knex.schema
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
  )
};
