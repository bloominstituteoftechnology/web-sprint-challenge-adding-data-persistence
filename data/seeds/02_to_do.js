exports.seed = async function (knex) {
  await knex("to_do")
    .truncate()
    .then(function () {
      return knex("to_do").insert([
        {
          description: "Feed ___",
          notes: "Preheat formula",
          completed: true,
          tasks_id: 1
        },
        {
          description: "Feed ___",
          notes: "Get lunch ready",
          completed: false,
          tasks_id: 2
        },
        {
          description: "Feed ___",
          notes: "Get bed ready, feed, burp, put to bed",
          completed: false,
          tasks_id: 3
        },
        {
          description: "Warm water",
          notes: "Ellie and ___ share the same soap",
          completed: false,
          tasks_id: 4
        },
        {
          description: "Clean clothes are in top drawer",
          notes: "Put dirty onsie in seperate bag",
          completed: true,
          tasks_id: 1
        },
      ]);
    });
};
