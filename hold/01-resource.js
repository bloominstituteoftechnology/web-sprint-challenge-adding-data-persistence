exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Resources").insert([
        { Name: "Computer", Description: "A computer to get the job done." },
        { Name: "Paper", Description: "A paper to get the job done." },
        {
          Name: "Whiteboard",
          Description: "A whiteboard to get the job done.",
        },
        {
          Name: "Google",
          Description: "A little googling to get the job done.",
        },
        {
          Name: "Gabe",
          Description: "A great instructor to get the job done.",
        },
      ]);
    });
};
