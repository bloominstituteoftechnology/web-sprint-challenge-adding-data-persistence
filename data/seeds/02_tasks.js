
exports.seed = async function (knex) {
	return knex("tasks").insert([
		{
			completed: true,
			description: "The first task is get a cup of strong coffee.",
			notes: "Better get a double roast americano.",
			project_id: 1,
		},
		{
			completed: true,
			description:
				"The second task is observe the cats and learn the techniques.",
			notes: "Watch the cat videos or borrow from the neigbour's.",
			project_id: 1,
		},
		{ description: "Rob the bank.", project_id: 2 },
		{
			completed: true,
			description: "Learn Japanese.",
			notes: "Go to local Japanese restorants to practice.",

			project_id: 3,
		},
		{
			completed: true,
			description: "Write a bot to randomly like posts and follow pages.",
			project_id: 4,
		},
		{
			completed: true,
			description: "Make a live sessions every week.",
			notes: "Best time for this are weekends.",
			project_id: 4,
		},
		{ completed: true, description: "Fly to Scotland.", project_id: 5 },
	]);
};