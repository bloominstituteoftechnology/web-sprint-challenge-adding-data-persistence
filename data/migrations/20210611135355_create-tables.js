
exports.up = async function(knex) {

    //projects table
    await knex.schema.createTable('projects', (table)=>{
        table.increments("project_id")//primary key
        table.text("project_name").notNullable()//project name column
        table.text("project_description")//project description column
        table.boolean("project_completed").default(0) //project completed column
    })
    //resources table
    await knex.schema.createTable("resources", (table)=>{
        table.increments("resource_id")//primary key
        table.text('resource_name').notNullable().unique()//resource name column
        table.text("resource_description")//resource description column
    })
    //tasks table
    await knex.schema.createTable('tasks' ,(table)=>{
        table.increments("task_id")//primary key
        table.text("task_description").notNullable()//task description column
        table.text("task_notes")//task notes column
        table.boolean('task_completed').default(0)//task completed column
        table.integer("project_id")//project id column
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
    //project resources table
    await knex.schema.createTable("project_resources", (table)=>{
        table.increments("assignment_id")//primary key
        table.integer("resources_id")//resources id from resources table
            .notNullable()
            .references("resource_id")
            .inTable('resources')
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("project_id")//project id from projects table
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")


    
  
};
