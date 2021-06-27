exports.seed = async function (knex) {
  await knex("resources").insert([
    {
      resource_name: "web a",
      resource_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet, felis id consequat malesuada, neque risus varius sapien, vitae maximus turpis lectus nec leo. ",
    },
    {
      resource_name: "web b",
      resource_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet, felis id consequat malesuada, neque risus varius sapien, vitae maximus turpis lectus nec leo. ",
    },
    {
      resource_name: "web c",
      resource_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet, felis id consequat malesuada, neque risus varius sapien, vitae maximus turpis lectus nec leo. ",
    },
    {
      resource_name: "web d",
      resource_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet, felis id consequat malesuada, neque risus varius sapien, vitae maximus turpis lectus nec leo. ",
    },
  ]);
};
