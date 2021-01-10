exports.seed = async function (knex) {
  await knex("resource").insert([
      {name: "Tommy", description: "Carpenter"},
      {name: "Austin", description: "Carpenter"},
      {name: "Wilson", description: "Plumber"},
      {name: "Noah", description: "Plumber"},
      {name: "Joseph", description: "Gardener"},
      {name: "Philip", description: "Gardener"}
  ])
}