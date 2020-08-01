exports.seed = function(knex, Promise) {
  return knex('projects').insert([
      { project_name: 'RenTech', project_description: 'Create an app that allows lenders to rent equipment to renters'},
      { project_name: 'Create a Database', project_description: 'Create a database with migrations and seeds using knex'}
  ]);
}