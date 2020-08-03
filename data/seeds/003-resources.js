exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Demolition Bar', description: 'You will need everything from a dainty 7-inch model to those 5-ft. long bringers of doom.'},
        {resource_name: 'Shop Vaccuum', description: 'Sometimes you will ll need to suck debris out of wall cavities and electrical boxes, for example, so have a reliable shop vacuum.'},
        {resource_name: 'Lighting', description: 'Your lighting equipment should include hanging and free-standing lighting, as well as a hands-free light that you can wear, such as a head lamp.'},
        {resource_name: 'Ear Muffler', description: 'Use ear plugs for work that is moderately loud, like drilling.'},
        {resource_name: 'Dust Mask', description: 'Use dust masks for dusty work like sweeping up, and get a cartridge respirator for filthy work such as pulling down old plaster.'},
      ]);
    });
};