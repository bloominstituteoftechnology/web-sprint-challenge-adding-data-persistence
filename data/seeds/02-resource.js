exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {resource_id: 1, resource_name: 'Resource One', resource_description: "This is a description of Resource One" },
          {resource_id: 2, resource_name: 'Resource Two', resource_description: "This is a description of Resource Two" },
          {resource_id: 3, resource_name: 'Resource Three', resource_description: "This is a description of Resource Three" }
        ]);
      });
  };