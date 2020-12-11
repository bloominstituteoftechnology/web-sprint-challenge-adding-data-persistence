exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Projects").insert([
        {
          Name: "Pass Sprint",
          Description: "Need to pass this sprint, but there is a lot to do.",
          Resource_ID: 1,
          Completed: false,
        },
        {
          Name: "Ace interview",
          Description: "Not sure what we will talk about :{",
          Resource_ID: 1,
          Completed: false,
        },
      ]);
    });
};
