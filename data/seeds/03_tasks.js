
exports.seed = function(knex) {
 
      return knex('tasks').insert([
        {task_description:'Build database', task_notes:'maintain referential integrity!',task_completed:false,project_id:1},
        {task_description:'Build endpoints', task_notes:'gonna write some nice middleware',task_completed:false,project_id:1},
        {task_description:'Write API calls', task_notes:'check your req.bodies!',task_completed:true,project_id:2},
      ]);
};
