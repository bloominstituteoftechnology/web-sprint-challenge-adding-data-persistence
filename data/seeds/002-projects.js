exports.seed = function(knex) {
  return knex('projects').insert([
        {pj_Name: 'PJ1', pj_descript: 'First PJ', completed: false},
        {pj_Name: 'PJ2', pj_descript: 'Sec PJ', completed: true},
        {pj_Name: 'PJ3', pj_descript: 'Third PJ', completed: false}
      ]);
};
