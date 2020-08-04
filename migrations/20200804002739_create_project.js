
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.text('name', 128).notNullble();
      tbl.text('description', 128)
      tbl.boolean('complete')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('projects')
};
