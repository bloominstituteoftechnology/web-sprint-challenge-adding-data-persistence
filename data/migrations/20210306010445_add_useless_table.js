
exports.up = function(knex) {
  return knex.schema.createTable("Project_Recources", tbl => {
      tbl.increments("project_rocources_id")
      tbl.integer("recource_id").unsigned().notNullable().references("recource_id").inTable("Recource")
      tbl.integer("task_id").unsigned().notNullable().references("task_id").inTable("task")
      tbl.boolean("is_this_a_completely_Useless_table_and_a_waste_of_time").defaultTo(true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Project_Recources")
};
