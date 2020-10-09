
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('project_name', 128)
                .unique()
                .notNullable();
            tbl.text('description', 128)
                .notNullable();
            tbl.boolean('completed_status')
                .notNullable()
                .defaultTo(0);
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('resource_name', 128)
                .unique()
                .notNullable();
            tbl.text('resource_description', 128)
                .notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('task_description', 128)
                .unique()
                .notNullable();
            tbl.text('notes', 128)
                .notNullable();
            tbl.boolean('completed_status')
                .notNullable()
                .defaultTo(0);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
};
