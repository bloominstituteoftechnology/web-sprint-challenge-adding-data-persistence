
exports.up = async function(knex) {
  await knex.schema.createTable('Projects', (tbl)=>{
      tbl.increments('project_id')
      tbl.text('project_name')
      tbl.text('project_description')
      .defaultTo(null)
      tbl.bool('project_completed')
      .defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('Projects')
};
