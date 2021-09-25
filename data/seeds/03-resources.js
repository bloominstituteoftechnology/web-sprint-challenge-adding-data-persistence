
exports.seed = function(knex) {

  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "NASA", resource_description: ""},
        {resource_name: "Elon Musk", resource_description: "He's already working on a spaceship to go there"},
        {resource_name: "Spaceship", resource_description: "How else am I going to get there?"},
        {resource_name: "freeze-dried food storage", resource_description: "Get used to it...It's probably all you'll be able to eat"},
        {resource_name: "ACME", resource_description: "ACME sells everything I'll need to complete my plans"},
        {resource_name: "cannon", resource_description: "big enough to launch myself out of"},
        {resource_name: "helmet", resource_description: "just in case, safety first"},

      ]);
    });
};
