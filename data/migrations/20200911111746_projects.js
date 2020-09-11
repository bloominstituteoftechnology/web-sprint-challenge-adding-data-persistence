
exports.up = function(knex) {
    return knex.schema
      .createTable('task', tbl => {
        tbl.increments();
        tbl.text('description', 256)
          .unique()
          .notNullable();
        tbl.text('notes', 150);
        tbl.boolean('completed')
        .notNullable();
      })

      .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name')
        .unique()
        .notNullable();
        tbl.text('description', 256);
      })

      .createTable('project', tbl => {
        tbl.increments();
        tbl.string('name')
        .unique()
        .notNullable();
        tbl.text('description', 256);
        tbl.boolean('completed')
        .notNullable();
        tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('task')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      })

      .createTable('projects_and_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resource')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects_and_resources')
      .dropTableIfExists('project')
      .dropTableIfExists('resource')
      .dropTableIfExists('task');
  };
  