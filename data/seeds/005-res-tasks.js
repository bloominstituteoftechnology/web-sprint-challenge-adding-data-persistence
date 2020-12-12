exports.seed = function(knex) {
  return knex('task_res').insert([
        {task_id: 1, res_id: 1, pj_id: 1},
        {task_id: 2, res_id: 2, pj_id: 2},
        {task_id: 3, res_id: 3, pj_id: 3},
      ]);
};
