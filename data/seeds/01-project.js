
exports.seed = function(knex) {
  return knex('project').insert([
   {id: 1, project_name: 'Hang Picture', description: 'bought new picture must hang on wall', completed: 0},
   {id: 2, project_name: 'Change LightBulb', description: 'light is out, must  change', completed: 0},
   {id: 3, project_name: 'Sweep the Kitchen',  description: 'spilled the beans', completed: 0}
 ]);

};
