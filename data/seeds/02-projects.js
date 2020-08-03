
exports.seed = function(knex) {
  //Insert seed entries
      return knex('projects').insert([
        {name: 'Build Api'},
        {name: 'World Domination'},
        {name: 'Make React App'},
        {name: 'Something With Godot'},
        {name: 'Hello World'}
      ]);

};
