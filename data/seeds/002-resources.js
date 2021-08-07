exports.seed = function(knex) {
  return knex('resources').insert([
    { 
      resource_name: "cleaning supplies", 
      resource_description:''
    },
    {
      resource_name: "computer, priting service", 
      resource_description:'use canva to make certificats and call FastSign for printing service'
    }
  ])
};