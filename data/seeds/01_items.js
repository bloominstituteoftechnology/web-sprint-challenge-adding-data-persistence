exports.seed = async function (knex) {
    await knex("item")
     .truncate()
     .then(function () {
       return knex("item").insert([
         {
           name: "Formula",
           notes:"From Holle"
         },
         {
            name: "Bottle",
            notes:"Glass Bottle for feeding"
          },
          {
            name: "Diapers",
            notes:"Check with Lauren for correct size"
          },
          {
            name: "Lotion",
            notes:"Always use the lotion after bath"
          },
          {
            name: "Bibs",
            notes:"Wash bibs seperately"
          },
          {
            name: "Spoon",
            notes:"Baby spoons have a bubber tips"
          },
       ]);
     });
  };
  
  