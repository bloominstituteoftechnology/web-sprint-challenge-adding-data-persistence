exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {task_id: 1, task_description: 'Write out API', task_notes: "In order to complete Task, use notes", task_completed: false, project_id: 1 },
          {task_id: 2, task_description: 'Fold the dishes', task_notes: "In order to complete Task, just do it", task_completed: true, project_id: 2 },
          {task_id: 3, task_description: 'Stare at the Solar Eclipse', task_notes: "In order to complete Task, show no fear", task_completed: true, project_id: 3 }
        ]);
      });
  };