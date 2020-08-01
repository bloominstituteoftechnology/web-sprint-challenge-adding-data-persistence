

exports.seed = function (knex) {
	return knex("project").insert([
		{
			name: "Project One",
      description: "Become a full-stack developer.",
      completed: false
		},
    { name: "Project Two", 
    description: "Create a game changing website.",
    completed: false,
  },
		{
			name: "Project Three",
			description: "Find investors.",
			completed: false,
		},
    { name: "Project Four", 
    description: "Buy-Out FaceBook.",
    completed: false,
  },
		{
			name: "Project Five",
			description: "Use the FaceBook byout to reboot MySpace.",
			completed: false,
		},
	]);
};