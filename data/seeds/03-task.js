exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Task")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Task").insert([
        {
          Description: "Need to pass this sprint, but there is a lot to do.",
          Project_ID: 1,
          Completed: false,
        },
        {
          Description: "Not sure what we will talk about :{",
          Project_ID: 2,
          Completed: false,
        },
      ]);
    });
};
