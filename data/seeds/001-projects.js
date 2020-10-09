
exports.seed = function(knex) {
const projects = [
  {
    name: "The First Project",
    description: "This is the first project that is being made",
    completed: false
  }
]

  return knex('projects').insert(projects)
};
