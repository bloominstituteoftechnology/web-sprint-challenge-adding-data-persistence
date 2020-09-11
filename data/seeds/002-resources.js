
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          resource_name: 'GET CD-Rs',
          resource_details: 'Do they still make those?'
        },
        {
          id: 2, 
          resource_name: 'Get Fans',
          resource_details: 'We need the people'
        },
        {
          id: 3, 
          resource_name: 'Containers',
          resource_details: 'Container Store'
        },
        {
          id: 4, 
          resource_name: 'Closet',
          resource_details: 'Need a closet to organize one'
        },
        {
          id: 5, 
          resource_name: 'Repo',
          resource_details: 'This app is going to change the world'
        },
        {
          id: 6, 
          resource_name: 'Database',
          resource_details: 'knex sqlite3 gimmegimme data'
        }
      ]);
    });
};
