// build your `/api/resources` router here
const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.use("/:resource_id", Resources.checkId);

// [GET] all resources
router.get("/", (req, res, next) => {
	Resources.find()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch(next);
});

// [POST] a resource
router.post("/", (req, res, next) => {
	Resources.add(req.body)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch(next);
});

// STRETCH ENDPOINT
// [GET] projects using this resource
router.get("/:resource_id/projects", (req, res, next) => {
	Resources.projectsUsing(req.params.resource_id)
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch(next);
});

module.exports = router;
// fixing git issues
