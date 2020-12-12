exports.seed = function(knex) {
  return knex('tasks').insert([
        {task_descript: 'Description1', notes: 'Task notes 1', completed: true, pj_id: 1},
        {task_descript: 'Description2', notes: 'Task notes 2', completed: false, pj_id: 2},
        {task_descript: 'Description3', notes: 'Task notes 3', completed: false, pj_id: 3},
      ]);
};
