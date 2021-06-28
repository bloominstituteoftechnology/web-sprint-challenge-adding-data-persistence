
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128)
        tbl.boolean('project_completed')
    })
    
    .createTable('resource', tbl => {
         tbl.increments('resource_id')
        tbl.string('resource_name', 128).notNullable().unique()

    })
    
    .createTable('task', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description', 128)
        tbl.boolean('task_completed')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project')
            .onDelete('RESTRICT')

    })

    .createTable('project_resources', tbl => {
        tbl.increments('project_resources_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("project")
            .onDelete("RESTRICT")
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references("resources_id")
            .inTable("resources")
            .onDelete("RESTRICT")

    })
    
    

};



exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('project_resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')


};
