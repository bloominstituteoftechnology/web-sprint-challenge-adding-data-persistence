exports.seed = function(knex) {
  return knex('resources').insert([
        {res_name: 'Res1', res_descript: 'Res Descript1'},
        {res_name: 'Res2', res_descript: 'Res Descript2'},
        {res_name: 'Res3', res_descript: 'Res Descript3'}
      ]);
};
