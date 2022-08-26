
exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name').notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed').defaultTo('false');
    })

        .createTable('resources', tbl => {
            tbl.increments('resources_id');
            tbl.string('resource_name').notNullable().unique();
            tbl.string('resource_description');
        })

        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.string('task_description').notnullable();
            tbl.string('task_notes');
            tbl.boolean('task_completed').defaultTo('false');
            tbl.integer('project_id').notNullable().references('project_id').inTable('projects');
        })

        .createTable('project_resources', tbl => {
            tbl.increments('joined_id');
            tbl.integer('project_id').references('project_id').inTable('projects');
            tbl.integer('resource_id').references('resource_id').inTable('resources');
        })


};


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
