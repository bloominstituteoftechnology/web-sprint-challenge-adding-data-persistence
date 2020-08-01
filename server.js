const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

server.get('/api/resources', (req, res) => {
    db('resources as r')
        .leftJoin('projects as p', 'p.id', 'r.projects_id')
        .select('r.id, r.resources_name', 'r.project_name')
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

server.post('./api/resources', (req, req) => {
    db('resources').insert(req.body)
    .then(ids => {
        const id = id[0];

        db('resources')
            .where({id})
            .first()
            .then(resource => {
                res.status(201).json(resource)
                })
            })    
            .catch(err => {
                res.status(500).json(err);
            });
});

server.post('./api/projects', (req, req) => {
    db('projects').insert(req.body)
    .then(ids => {
        const id = id[0];

        db('projects')
            .where({id})
            .first()
            .then(project => {
                res.status(201).json(project)
                })
            })    
            .catch(err => {
                res.status(500).json(err);
            });
});

server.post('./api/tasks', (req, req) => {
    db('tasks').insert(req.body)
    .then(ids => {
        const id = id[0];

        db('tasks')
            .where({id})
            .first()
            .then(task => {
                res.status(201).json(task)
                })
            })    
            .catch(err => {
                res.status(500).json(err);
            });
});

server.get('/api/tasks', (req, res) => {
    db('tasks as t')
        .leftJoin('projects as p', 'p.id', 't.projects_id')
        .select('t.id, t.task_name', 'p.project_name')
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => {
        res.status(500).json(err)
    });
});
