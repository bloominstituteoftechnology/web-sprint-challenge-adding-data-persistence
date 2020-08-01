
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'instructions for windchime', notes: 'for kids', project_id: 1},
        {description: 'instructions for research paper', notes: 'for college students',project_id: 2},
        {description: 'instructions for bullet journal', notes: 'for fun',project_id: 3}
      ]);
};
