
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl=>{
        tbl.increments("project_id")
        tbl.string("project_name",128).notNullable()
        tbl.string("project_description")
        tbl.integer("project_completed")
        //   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided
    })
    .createTable("resources", tbl=>{
        tbl.increments("resource_id")
        tbl.string("resource_name",128).notNullable().unique()
        tbl.string("resource_description")
    })
    .createTable("tasks", tbl=>{
        tbl.increments("task_id")
        tbl.string("animal_name",128).notNullable()
        tbl.integer("species_id")
            .unsigned()
            .notNullable()
            .references("species_id")
            .inTable("species")
            .onDelete("RESTRICT")
    })
    .createTable("zoo_animals", tbl=>{
        tbl.increments("zoo_animals_id")
        tbl.integer("zoo_id")
            .unsigned()
            .notNullable()
            .references("zoo_id")
            .inTable("zoos")
            .onDelete("RESTRICT")
        tbl.integer("animal_id")
            .unsigned()
            .notNullable()
            .references("animal_id")
            .inTable("animals")
            .onDelete("RESTRICT")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("zoo_animals")
    .dropTableIfExists("animals")
    .dropTableIfExists("species")
    .dropTableIfExists("zoos")
};
