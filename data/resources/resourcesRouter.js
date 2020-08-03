const express = require('express');
const db = require('./resourcesModel.js');
const mapper = require('./mapper');
const { validateResourceBody } = require('./mapper');
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allResources = await db.getResources();
    res.json(allResources);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateResourceBody, async (req, res, next) => {
  try {
    const newResource = await db.insert(req.body);
    res.json(newResource);
  } catch (error) {
    next(error);
  }
});

  module.exports = router;