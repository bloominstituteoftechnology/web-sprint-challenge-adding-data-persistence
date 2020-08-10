const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Resources.getResources()
		.then((resources) => {
			res.json(resources);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get resources.' });
		});
});

router.post('/', (req, res) => {
	const newResource = req.body;
	Resources.addResources(newResource)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new resource.' });
		});
});

module.exports = router;