
exports.up = function(knex) {
    return knex.schema.createTable("project-resource", tbl => {
        tbl.increments("id")
        tbl.integer("project_id")
        tbl.foreign("project_id").references("projects.id")
        tbl.integer("resource_id")
        tbl.foreign("resource_id").references("resources.id")
    })
    
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("project-resource")
  
};
