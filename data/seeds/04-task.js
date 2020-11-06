
exports.seed = function(knex) {
  return knex('project').insert([
   {id: 1, sequence: 1, instruction: 'place nail on wall where picture will go', completed: 0, project_id:1},
   {id: 2, sequence: 2, instruction: 'use hammer to persuade it into place', completed: 0, project_id:1},
   {id: 3, sequence: 3, instruction: 'hang picture on nail', completed: 0, project_id:1},
   {id: 4, sequence: 4, instruction: 'admire handywork', completed: 0, project_id:1},
   {id: 5, sequence: 1, instruction: 'find ladder and light bulb', completed: 0, project_id:2},
   {id: 6, sequence: 2, instruction: 'climb ladder', completed: 0, project_id:2},
   {id: 7, sequence: 3, instruction: 'unscrew old lightbulb', completed: 0, project_id:2},
   {id: 8, sequence: 4, instruction: 'screw in new lightbulb', completed: 0, project_id:2},
   {id: 9, sequence: 5, instruction: 'test new light', completed: 0, project_id:2},
   {id: 10, sequence: 1, instruction: 'make sure roomba is charged', completed: 0, project_id:3},
   {id: 11, sequence: 2, instruction: 'push "clean" button on roomba', completed: 0, project_id:3},
   {id: 12, sequence: 3, instruction: 'enojoy cofee', completed: 0, project_id:3}
 ]);

};
