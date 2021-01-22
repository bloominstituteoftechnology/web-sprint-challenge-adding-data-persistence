
exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name:'SprintChallenge',project_description:'Making databases and APIs',project_completed:false},
        {project_name:'Build Week Unit 3',project_description:'Create African Marketplace',project_completed:true},
        {project_name:'Model Airplane',project_description:'Build model airplane',project_completed:false},
      ]);
    
};
