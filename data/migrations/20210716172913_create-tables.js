exports.up = function(knex) {

    return knex.schema.createTable("projects", function(projects) {
        projects.increments("project_id")

        projects.string("project_name").notNullable()
        projects.string("project_description")
        projects.boolean("project_completed").defaultTo(false)
    })
}


//     return knex.schema.createTable("tasks", (table) => {
//         table.increments("id")
//         table.text("name").notNull().unique()
//         table.text("instructions").notNull()
//     })
  
//     return knex.schema.createTable("resources", (table)=> {
//         table.increments("id")
//         table.blob("resource").notNull()
//     })
  
//     return knex.schema.createTable("project_resources", (table)=> {
//         table
//             .integer("task_id")
//             .references("id")
//             .inTable("task")
//             .onDelete("CASCADE")
//             .onUpdate("CASCADE")
//             .notNull()
  
//         table
//             .integer("project_id")
//             .references("id")
//             .inTable("project")
//             .onDelete("CASCADE")
//             .onUpdate("CASCADE")
//             .notNull()

//         table 
//             .integer("resource_id")
//             .references("id")
//             .inTable("resource")
//             .onDelete("CASCADE")
//             .onUpdate("CASCADE")
//             .notNull()
          
//         table.primary(["task_id", "project_id"])
  
  
//     })
  
  
  
//   };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects")
    //   return knex.schema.dropTableIfExists("project_resources")
    //   return knex.schema.dropTableIfExists("resources")
    //   return knex.schema.dropTableIfExists("tasks")
    
  };