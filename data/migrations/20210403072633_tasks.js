
exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.text('task_description')
                .notNullable();
            tbl.text('task_notes');
            tbl.integer('task_completed')
                .defaultTo(0);
            tbl.integer('project_id')
                .references('project_id')
                .inTable('projects')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
};
