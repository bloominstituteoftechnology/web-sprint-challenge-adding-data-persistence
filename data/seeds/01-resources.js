exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {resource_name: 'finance', resource_description: 'finance and accounting assets'},
    {resource_name: 'strategy', resource_description: 'legal and strategic assets'},
    {resource_name: 'product', resource_description: 'product and marketing assets'}
  ]);
};
