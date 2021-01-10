exports.seed = async function (knex) {
  await knex("task").insert([
      { name: "fixing screws", project_id: 1},
      { name: "fixing Drawer", project_id: 1},
      { name: "fixing hinges", project_id: 1},
      { name: "fixing handles", project_id: 1},
      { name: "fixing taps", project_id: 2},
      { name: "fixing flush tank", project_id: 2},
      { name: "fixing bath tub", project_id: 2},
      { name: "fixing sink", project_id: 2},
      { name: "mowing lawn", project_id: 3},
      { name: "trimming edges", project_id: 3},
      { name: "pruning bushes", project_id: 3},
      { name: "removing weeds", project_id: 3},
  ])
}