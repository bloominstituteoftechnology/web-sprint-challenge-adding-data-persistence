
exports.seed = function(knex) {
      return knex('table_name').insert([
        {project_name: 'windchime', description: 'make a windchime'},
        {project_name: 'research paper', description: 'write a research paper'},
        {project_name: 'bullet journal', description: 'make a bullet journal'}
      ]);
};
