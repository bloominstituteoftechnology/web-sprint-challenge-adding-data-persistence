
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name").notNullable();
      tbl.string("project_description", 2000);
      tbl.boolean("project_completed").notNullable().defaultTo(false);
    
  })
  .createTable("resource", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name").unique().notNullable();
        tbl.string("resource_description", 2000)
  })
  .createTable("task", (tbl) => {
    tbl.increments("task_id");
    tbl.string("task_description").notNullable();
    tbl.string("task_notes");
    tbl.boolean("task_completed").notNullable().defaultTo(false);
    tbl.integer("project_id").unsigned().notNullable().references("projects.project_id").onUpdate("CASCADE").onDelete("CASCADE")
})
.createTable("project_resources", (tbl) => {
    tbl.integer("project_id").unsigned().notNullable().references("projects.project_id").onUpdate("CASCADE").onDelete("CASCADE")
    tbl.integer("resource_id").unsigned().notNullable().references("resource.resource_id").onUpdate("CASCADE").onDelete("CASCADE");
    tbl.primary(["project_id", "resource_id"])

})

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIFExists("project_resources")
    .dropTableIFExists("task")
    .dropTableIFExists("resource")
    .dropTableIFExists("projects")
};
