exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Destroy the Sprint Challenge",
          completed: 0,
          project_description: "complete MVP asap and go on with your day",
        },
        {
          project_name: "Purchase an artisinal dousing rod",
          completed: 1,
          project_description: "need to find a woodland creature to sell it",
        },
        {
          project_name: "beat a wizard in a foot race",
          completed: 0,
          project_description: "pretty self explanatory",
        },
      ]);
    });
};
