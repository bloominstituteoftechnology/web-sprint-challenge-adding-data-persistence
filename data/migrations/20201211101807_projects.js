
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('project_name', 128).notNullable()
            tbl.string('description', 128)
            tbl.boolean('completed').notNullable().defaultTo(0)
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('resource_name', 128).notNullable()
            tbl.string('description',128)
        })
        .createTable('project_resources', tbl => {
            tbl.increments()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id').inTable('projects')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id').inTable('resources')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
        })
        .createTable('tasks', tbl =>{
            tbl.increments()
            tbl.string('description', 128).notNullable()
            tbl.string('notes', 128)
            tbl.boolean('completed').notNullable().defaultTo(0)
            tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id').inTable('projects')
              .onDelete('RESTRICT').onUpdate('RESTRICT')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
