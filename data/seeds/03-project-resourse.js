exports.seed = function(knex, Promise) {
  
  return knex('Recipe_Ingredients').insert([
    {id: 1, resourse_id: 1, project_id: 1},
    {id: 2, resourse_id: 2, project_id: 1},
    {id: 3, resourse_id: 3, project_id: 2},
    {id: 4, resourse_id: 4, project_id: 2},
    {id: 5, resourse_id: 5, project_id: 3},
    {id: 6, resourse_id: 6, project_id: 3},
    {id: 7, resourse_id: 7, project_id: 3}
    
  ])
  }