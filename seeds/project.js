exports.seed = async function (knex) {
  await knex("project").insert([
      { name: "carpenting", description: "Fix all the drawers and doors"},
      { name: "Plumbing", description: "Fix all the leakage and taps"},
      { name: "Gardening", description: "Prune all the bushes"}
  ])
}

