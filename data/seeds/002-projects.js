
exports.seed = function(knex) {
  
  
      return knex('projects').insert([
        { p_name: 'Bird House'}
       
      ]);
    };

