exports.seed = async function (knex) {
  await knex("task_todo")
   .truncate()
   .then(function () {
     return knex("task_todo").insert([
       {
         tasks_id: 1,
         item_id: 1,
       },
       {
          tasks_id: 2,
          item_id: 2,
        },
        {
          tasks_id: 3,
          item_id: 3,
        },
        {
          tasks_id: 4,
          item_id: 4,
        },
        {
          tasks_id: 5,
          item_id: 5,
        },

     ]);
   });
};