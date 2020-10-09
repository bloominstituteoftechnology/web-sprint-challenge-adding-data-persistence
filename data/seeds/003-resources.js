exports.seed = function(knex) {
  const resources = [
    {
      name: "Joe bob",
      description: "The best 80s hacker movie dude ever"
    },
    {
      name: "A staple",
      description: "Just a staple on the office floor"
    },
    {
      name: "Bob Joe",
      description: "Joe Bobs brother their parents where very creative"
    }
  ]
  
    return knex('resources').insert(resources)
  };