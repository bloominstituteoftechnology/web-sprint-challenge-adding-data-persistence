const express = require("express");
const project = require("./projects_helper");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const projects = await project.get();
		res.json(projects);
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const project = await project.getById(req.params.id);
		if (!project) {
			return res.status(404).json({
				message: "The project not found.",
			});
		}
		res.json(project);
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newProject = await project.add(req.body);
		res.json(newProject);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/resources", async (req, res, next) => {
	try {
		const [resource] = await project.getResourceByProject(req.params.id);
		if (!resource) {
			return res.status(404).json({
				message: "The resource not found.",
			});
		}
		res.json(resource);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/tasks", async (req, res, next) => {
	try {
		const tasks = await project.getTaskByProject(req.params.id);
		if (!tasks) {
			return res.status(404).json({
				message: "The tasks are not found.",
			});
		}
		res.json(tasks);
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const project = await project.deleteProject(req.params.id);
	
		res.json({
			message: "The project was removed."
		});
	} catch (err) {
		next(err);
	
	}
})

router.put("/:id", async (req, res, next) => {
	try {
		// const {id} = req.params;
		// const changes = req.body;
		const project = await project.updateProject(req.params.id, req.body)
		res.json(project)
	} catch (err) {
		next(err)
	}
})

module.exports = router;