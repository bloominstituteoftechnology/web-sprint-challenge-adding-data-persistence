
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_details').notNullable()
        tbl.text('task_notes')
        tbl.boolean('task_completed').defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks'); 
};
