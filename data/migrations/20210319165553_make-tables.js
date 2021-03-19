exports.up = function(knex) {
    return knex.schema
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name', 128).notNullable().unique()
            tbl.string('resource_description', 128)
        })
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name', 128).notNullable()
            tbl.string('project_description', 128)
            tbl.integer('project_completed')
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description', 128).notNullable()
            tbl.string('task_notes', 128)
            tbl.boolean('task_completed')
            //foreign key
            tbl.integer('project_id')
                .unsigned() // no negative id's
                .notNullable() // my choice
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('project_resources_id').notNullable()
            tbl.integer('project_id')
                .unsigned() 
                .notNullable() 
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            tbl.integer('resource_id')
                .unsigned() 
                .notNullable() 
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
};
