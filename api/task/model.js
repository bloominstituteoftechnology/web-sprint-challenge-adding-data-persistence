// build your `Task` model here
const db = require("../../data/dbConfig");

const get = async () => {
	const tasks = await db("tasks as T").leftJoin("projects as P", "P.project_id", "T.project_id").select("T.*", "P.project_name", "P.project_description");

	const taskObject = tasks.map((task) => {
		return {
			task_id: task.task_id,
			task_description: task.task_description,
			task_notes: task.task_notes,
			task_completed: task.task_completed ? true : false,
			project_id: task.project_id,
			project_name: task.project_name,
			project_description: task.project_description,
		};
	});
	return taskObject;
};

const insert = async (task) => {
	const [task_id] = await db("tasks as T").leftJoin("projects as P", "P.project_id", "T.project_id").select("T.*", "P.project_id").insert(task);

	return {
		task_id: task_id,
		task_description: task.task_description,
		task_notes: !task.task_notes ? null : task.task_notes,
		task_completed: task.task_completed === 1 ? true : false,
		project_id: task.project_id,
	};
};

module.exports = { get, insert };
