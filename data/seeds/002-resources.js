
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          resource_name: 'Burn CD-R Album Copies',
          resource_details: 'Do they still make those?'
        },
        {
          id: 2, 
          resource_name: 'Make Them Listen',
          resource_details: 'Corner people on the street and make them buy your fire rhymes for $5'
        },
        {
          id: 3, 
          resource_name: 'Go to the Container Store',
          resource_details: 'Spend lifesavings on organization tools'
        },
        {
          id: 4, 
          resource_name: 'Empty Closet',
          resource_details: 'Now just leave your bedroom a disaster zone for 1-3 weeks'
        },
        {
          id: 5, 
          resource_name: 'Create Repo',
          resource_details: 'This app is going to change the world'
        },
        {
          id: 6, 
          resource_name: 'Design the Database',
          resource_details: 'Really make this painful. Overthink it. Delete it three times.'
        }
      ]);
    });
};
