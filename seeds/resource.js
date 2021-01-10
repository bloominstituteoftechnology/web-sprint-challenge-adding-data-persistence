exports.seed = async function (knex) {
  await knex("resource").insert([
      {name: "Tommy", decription: "Carpenter"},
      {name: "Austin", decription: "Carpenter"},
      {name: "Wilson", decription: "Plumber"},
      {name: "Noah", decription: "Plumber"},
      {name: "Joseph", decription: "Gardener"},
      {name: "Joseph", decription: "Gardener"}
  ])
}