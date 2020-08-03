
exports.up = function(knex) {
    return (
        knex.schema
            .createTable('projects', tbl => {
                tbl.increments();
                tbl.string('project_name', 255).notNullable().unique();
                tbl.string('description', 255);
                tbl.integer('is_completed').unsigned().notNullable().defaultTo(0);
            })
            .createTable('resources', tbl => {
                tbl.increments();
                tbl.string('resource_name', 255).notNullable().unique();
                tbl.string('description', 255);
            })
            .createTable('tasks', tbl => {
                tbl.increments();
                tbl.string('description', 255);
                tbl.string('notes', 255);
                tbl.integer('is_completed').unsigned().notNullable().defaultTo(0);
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
            })
            .createTable('projects_resources', tbl => {
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
    )
};

exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfExists('projects_resources')
            .dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')
    );
  
};
