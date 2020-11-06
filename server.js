const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());
//get and post request for resources
server.get('/api/resources', (req, res) => {
    db('resources')
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.post('/api/resources', (req, res) => {
    db('resources').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('resources')
        .where({ id })
        .first()
      .then(resource => {
        res.status(201).json(resource);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

//get and post request for projects
server.get('/api/projects', (req, res) => {

    db('projects as p')
      .join('project_resources as m', 'm.project_id', 'p.id')
      .Join('resources as r', 'r.id', 'm.resource_id')
      .joing('tasks as t', 't.project_id', 'p.id')
      .select('p.id', 'r.name')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.post('/api/projects', (req, res) => {
    db('projects').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('projects')
        .where({ id })
        .first()
      .then(project => {
        res.status(201).json(project);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });
//get and post for tasks

server.get('/api/animals', (req, res) => {
    db('animals as a')
      .leftJoin('species as s', 's.id', 'a.species_id')
      .select('a.id', 'a.animal_name', 's.species_name')
    .then(animals => {
      res.status(200).json(animals);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });
  
  // create animal

  server.get('/api/tasks', (req, res) => {

    db('tasks as t')
      .join('projects as p', 'p.id', 't.project_id')
      .select('t.id', 'p.name', 't.name')
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.post('/api/tasks', (req, res) => {
    db('tasks').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('tasks')
        .where({ id })
        .first()
      .then(animal => {
        res.status(201).json(animal);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });
