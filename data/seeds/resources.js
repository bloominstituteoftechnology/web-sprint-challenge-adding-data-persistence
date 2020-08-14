exports.seed = function(knex) {
    return knex('resources').truncate().then(function () {
        return knex('resources').insert([
            {id: 1, name: 'vscode', description: 'text editor'},
            {id: 2, name: 'sqlite studio', description: 'dbms client'},
            {id: 3, name: 'computer', description: 'tool to create wealth'},
            {id: 4, name: 'postman', description: 'http client'},
            {id: 5, name: 'github', description: 'cloud storage for projects'}            
        ]);
    });
};
