exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([{
          id: 1,
          resource_name: "computer"
        },
        {
          id: 2,
          resource_name: "conference room"
        },
        {
          id: 3,
          resource_name: "microphone"
        },
        {
          id: 4,
          resource_name: "delivery van"
        },
      ]);
    });
};