
exports.seed = function(knex) {
  //Insert seed entries
      return knex('resources').insert([
        {name: 'laptop computer', description: 'computer'},
        {name: 'Mac', description: 'computer'},
        {name: 'desktop computer', description: 'computer'},
        {name: 'Aspin Room', description: 'conference room'},
        {name: 'microphone'},
        {name: 'Van', description: 'delivery van'},
        {name: 'Carl', description: 'delivery man'},
      ]);

};
