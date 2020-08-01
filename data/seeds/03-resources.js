
exports.seed = function(knex) {
      return knex('resources').insert([
        //windchime
        {resource_name: 'keys'},
        {resource_name: 'stick'},
        {resource_name: 'string'},
        {resource_name: 'paint'},
        //paper
        {resource_name: 'computer'},
        {resource_name: 'grammerly'},
        {resource_name: 'note organizer'},
        {resource_name: 'lots of tissue'},
        //journal
        {resource_name: 'journal'},
        {resource_name: 'pencil'},
        {resource_name: 'markers'},
        {resource_name: 'pens'},
        {resource_name: 'stickers'},
        {resource_name: 'ruler'},
      ]);
};
