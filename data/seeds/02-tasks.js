
exports.seed = function(knex) {

  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "Buy a Tesla", task_notes: "", project_id: 2},
        {task_description: "Befriend Elon Musk", task_notes: "probably the least expensive way to get a ticket", project_id: 2},
        {task_description: "buy lots of freeze-dried food", task_notes: "need to get used to living on it", project_id: 2},
        {task_description: "buy and assemble a cannon", task_notes: "make sure it's a quick set-up cannon", project_id: 1},
        {task_description: "set up cannon where I can see Road Runner", task_notes: "make sure cannon is aimed in the direction he's running", project_id: 1}

      ]);
    });
};
