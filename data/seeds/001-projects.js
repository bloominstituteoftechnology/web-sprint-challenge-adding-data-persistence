
exports.seed = function(knex, Promice) {
  return knex('projects').insert([
    {
      project_name: 'clean house', 
      project_description: 'cleaning lady is not going to show up.',
      project_completed: false
    },
    {
      project_name: 'prepare students certificate', 
      project_description: '',
      project_completed: false
    }
  ]);     
};
