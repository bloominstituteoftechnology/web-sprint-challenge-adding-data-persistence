exports.up = function (knex, Promise) {
    return knex.schema
      .createTable("projects", (tbl) => {
        //project id
        tbl.increments();
        //project name
        tbl.string("project_name", 128).notNullable();
        //project completed (default false)
        tbl.boolean("completed");
        //project description
        tbl.string("project_desc", 400).notNullable();
      })
  
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
  };