exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name', 128)
                .notNullable()
            table.string('project_description', 128)
            table.boolean('project_completed')
        })
        .createTable('resources', table => {
            // resource_key primary
            // resource_name req and uni
            // resource_description 
            table.increments('resource_key')
        })
        .createTable('tasks', table => {
            // task_id primary
            // task_description req
            // task_notes
            // task_completed false
            // project_id req points to project table
            table.increments('task_id')
        })
        .createTable('project_resources', table => {
            // p_r id
            // resource assignment
            // resource id connects to resource table
            table.increments('project_resources_id')
        })
};

exports.down = function(knex) {
  
};
