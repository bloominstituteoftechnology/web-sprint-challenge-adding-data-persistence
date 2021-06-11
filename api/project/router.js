// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.use("/:project_id", Projects.checkId);

// [GET] all projects
router.get("/", (req, res, next) => {
	Projects.find()
		.then((projects) => {
			res.status(200).json(trueOrFalse(projects));
		})
		.catch(next);
});

// [POST] a project
router.post("/", (req, res, next) => {
	Projects.add(req.body)
		.then((project) => {
			res.status(201).json(trueOrFalse(project)[0]);
		})
		.catch(next);
});

// STRETCH ENDPOINTS
// [GET] project resources
router.get("/:project_id/resources", (req, res, next) => {
	Projects.projectResources(req.params.project_id)
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch(next);
});

// [GET] project tasks
router.get("/:project_id/tasks", (req, res, next) => {
	Projects.projectTasks(req.params.project_id)
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch(next);
});

// function to convert integer to boolean
const trueOrFalse = (projects) => {
	return projects.map((proj) => ({
		...proj,
		project_completed: proj.project_completed ? true : false,
	}));
};

module.exports = router;
// fixing git issues
