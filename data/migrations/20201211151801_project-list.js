
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('pj_name', 56).notNullable()
            tbl.string('pj_descript', 128)
            tbl.boolean('completed').notNullable().defaultTo('false')
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('res_name', 56).notNullable().unique()
            tbl.string('res_descript')
        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.string('task_descript', 128).notNullable()
            tbl.string('notes', 512)
            tbl.boolean('completed').notNullable().defaultTo('false')
            tbl.integer('pj_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('task_res', tbl => {
            tbl.increments()
            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tasks')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('res_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('pj_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};
  
exports.down = function(knex) {
    return knex.schema
        .dropIfTableExists('task_res')
        .dropIfTableExists('tasks')
        .dropIfTableExists('resources')
        .dropIfTableExists('projects')

};