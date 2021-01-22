
exports.seed = function(knex) {
 
      return knex('resources').insert([
        {resource_name:'pen', resource_description:'for writing'},
        {resource_name:'paper', resource_description:'for writing on'},
        {resource_name:'cardboard', resource_description:'for structure'},
      ]);
};
