exports.seed = async function (knex) {
  await knex("tasks")
   .truncate()
   .then(function () {
     return knex("tasks").insert([
       {
         name: "Morning Feed",
         description: "Prepare breakfast, feed baby",
         completed:true
       },
       {
        name: "Afternoon Feed",
        description: "Prepare lunch, feed baby",
        completed:false
      },
      {
        name: "Night time feed",
        description: "Prepare Dinner, feed baby",
        completed:false
      },
      {
        name: "Bathe",
        description: "Get bath ready, warm water, bathe baby",
        completed:false
      },
      {
        name: "Change",
        description: "Grab a diaper and wipes, change baby",
        completed:true
      },
     ]);
   });
};