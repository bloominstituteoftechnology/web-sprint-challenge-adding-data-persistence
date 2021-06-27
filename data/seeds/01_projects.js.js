exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      project_name: "Introduction to Node.js and Express",
      project_description:
        "Introduce Node.js and Express, discover what Node.js is and what it can and cannot do. ",
      project_completed: false,
    },
    {
      project_name: "Server-Side Routing with Express",
      project_description:
        "In this module we will take a deeper look at routing. We will use the routing feature of express to build several endpoints, cover different ways to pass data to a Web API, introduce REST as a way to guide the architecture of our web, and use Express Routers to organize our code.",
      project_completed: false,
    },
    {
      project_name: "Express Middleware",
      project_description:
        "Express is a minimalist framework. It doesn't provide everything out of the box, but using middleware can add extra functionality to our application. Using middleware offers a way to extend the features provided by the Express framework. ",
      project_completed: false,
    },
    {
      project_name: "Web Deployment and Best Practices",
      project_description:
        "We're working on extracting configuration values into environment variables and deploying an API to Heroku.",
      project_completed: false,
    },
  ]);
};
