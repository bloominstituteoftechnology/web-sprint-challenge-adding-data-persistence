exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Build a car", description: "Build yourself your own car", completed: false },
    { name: "Build a better AI", description: "Build an AI that knows truths", completed: false },
    { name: "Build a PC", description: "Build your own gaming machine", completed: false },
  ])
}
