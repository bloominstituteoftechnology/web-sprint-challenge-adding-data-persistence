exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { resource_name: 'laptop', description: "what youre typing this on"}
    ]);
  };