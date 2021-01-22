
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('description').notNullable()
        tbl.string('notes')
        tbl.boolean('task_completed').notNullable().defaultTo('false')
        tbl.integer('t-project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('tasks')
};
