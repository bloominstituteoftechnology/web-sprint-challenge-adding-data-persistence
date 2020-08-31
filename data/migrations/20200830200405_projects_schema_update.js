
exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl =>{
            tbl.increments()
            tbl.string('name',128).unique().notNullable()
            tbl.string('description')
            tbl.boolean('completed').defaultTo(false)
        })
        .createTable('resource', tbl =>{
            tbl.increments()
            tbl.string('name',128).notNullable().unique()
            tbl.string('description')
        })

        .createTable('task', tbl =>{
            tbl.increments()
            tbl.string('desc').notNullable()
            tbl.string('notes')
            tbl.boolean('completed').defaultTo(false).notNullable()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete("CASCADE")
        })

        .createTable('project_resources', tbl =>{
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete("CASCADE")
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource')
                .onUpdate('CASCADE')
                .onDelete("CASCADE")
            tbl.primary(['project_id','resource_id'])
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')

};
