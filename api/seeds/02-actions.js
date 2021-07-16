exports.seed = function (knex) {

  return knex('users').truncate()
    .then(function () {
  
      return knex('users').insert([

        { user_name: 'jim', avg_height: 5.5, color_hair: 'black'},
        {user_name: 'bob', avg_height: 6.5, color_hair: 'blonde' },
        {user_name: 'mike', avg_height: 5.11, color_hair: 'brown' }
      ]);
    });
};



