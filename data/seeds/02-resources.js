exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {resource_name: 'yoga mat'},
    {resource_name: 'yoga blocks'},
    {resource_name: 'yoga straps'},
    {resource_name: 'laptop'},
    {resource_name: 'favorite yoga class', resource_description: 'look on youtube for classes' },
    {resource_name: 'journal'},
    {resource_name: 'writing utensils', resource_description: 'pens, pencils, markers'},
    {resource_name: 'sticker', resource_description: 'your choice, not necessary'},
    {resource_name: 'ruler'}
  ]);
};