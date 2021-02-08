
exports.up = async function(knex) {
  await knex.schema.createTable('Resources', (tbl)=>{
      tbl.increments('resource_id')
      tbl.text('resource_name')
      .unique()
      tbl.text('description')
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('Resources')
};
