
exports.seed = function(knex) {
  return knex('resourse').insert([
   {id: 1, resourse_name: 'hammer', description: 'for bashing'},
   {id: 2, resourse_name: 'nails', description: 'for penetrating'},
   {id: 3, resourse_name: 'lightbulb', description: 'for ideas'},
   {id: 4, resourse_name: 'ladder',  description: 'to reach the previously unreachable'},
   {id: 5, resourse_name: 'hand',  description: 'to push button'},
   {id: 6, resourse_name: 'roomba',  description: 'ai will take over the world, sweeping one floor at a time'},
   {id: 7, resourse_name: 'coffe',  description: 'for enjoying'}
   
 ]);

};
