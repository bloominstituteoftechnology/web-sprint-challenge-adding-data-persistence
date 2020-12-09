// 👉 You can run these tests in your terminal by executing `npm test`
const request = require('supertest')
const server = require('./api/server')
const db = require('./data/dbConfig')

const projectA = { name: 'Web API', description: 'Build APIs' }
const projectB = { name: 'Databases', description: 'Learn SQL', completed: true }
const projectC = { name: 'Authentication' }

const resourceA = { name: 'keyboard' }
const resourceB = { name: 'computer', description: 'Windows PC' }

const taskA = { description: 'Do foo', project_id: 1 }
const taskB = { description: 'Do bar', notes: 'Use Postman!', project_id: 1 }
const taskC = { description: 'Do baz', notes: 'Have fun!', completed: true, project_id: 2 }

beforeAll(async () => {
  await db.migrate.latest()
})
afterAll(async(done) => {
  await db.destroy()
  done()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  // 👉 PROJECTS
  // 👉 PROJECTS
  // 👉 PROJECTS
  describe('projects endpoints', () => {
    beforeEach(async () => {
      await db('projects').truncate()
      await db('projects').insert(projectA)
      await db('projects').insert({ ...projectB, completed: 1 })
    })
    describe('[GET] /api/projects', () => {
      it('can get all projects that exist in the table', async () => {
        const res = await request(server).get('/api/projects')
        expect(res.body).toHaveLength(2)
      }, 500)
      it('each project contains name, description and completed (as a boolean)', async () => {
        const res = await request(server).get('/api/projects')
        expect(res.body[0]).toMatchObject({ ...projectA, completed: false })
        expect(res.body[1]).toMatchObject(projectB)
      }, 500)
    })
    describe('[POST] /api/projects', () => {
      it('can add a new project to the table', async () => {
        await db('projects').truncate()
        await request(server).post('/api/projects').send(projectA)
        await request(server).post('/api/projects').send(projectB)
        await request(server).post('/api/projects').send(projectC)
        const projects = await db('projects')
        expect(projects).toHaveLength(3)
        expect(projects[0]).toMatchObject(projectA)
        expect(projects[1]).toMatchObject({ name: 'Databases', description: 'Learn SQL' })
        expect(projects[2]).toMatchObject({ ...projectC, description: null })
      }, 500)
      it('can add the project to the table with its completed as an integer', async () => {
        await db('projects').truncate()
        await request(server).post('/api/projects').send(projectA)
        await request(server).post('/api/projects').send(projectB)
        await request(server).post('/api/projects').send(projectC)
        const projects = await db('projects')
        expect(projects).toHaveLength(3)
        expect(projects[0]).toMatchObject({ completed: 0 })
        expect(projects[1]).toMatchObject({ completed: 1 })
        expect(projects[2]).toMatchObject({ completed: 0 })
      }, 500)
      it('responds with the newly created project with its completed as a boolean', async () => {
        await db('projects').truncate()
        const res = await request(server).post('/api/projects').send(projectA)
        expect(res.body).toMatchObject({ ...projectA, completed: false })
      }, 500)
      it('rejects projects lacking a name with an error status code', async () => {
        await db('projects').truncate()
        const res = await request(server).post('/api/projects').send({})
        const projects = await db('projects')
        expect(res.status + '').toMatch(/4|5/)
        expect(projects).toHaveLength(0)
      }, 500)
    })
  })

  // 👉 RESOURCES
  // 👉 RESOURCES
  // 👉 RESOURCES
  describe('resources endpoints', () => {
    beforeEach(async () => {
      await db('resources').truncate()
      await db('resources').insert(resourceA)
      await db('resources').insert(resourceB)
    })
    describe('[GET] /api/resources', () => {
      it('can get all resources in the table', async () => {
        const res = await request(server).get('/api/resources')
        expect(res.body).toHaveLength(2)
        expect(res.body[0]).toMatchObject(resourceA)
        expect(res.body[1]).toMatchObject(resourceB)
      }, 500)
    })
    describe('[POST] /api/resources', () => {
      it('can add a new resource to the table', async () => {
        await db('resources').truncate()
        await request(server).post('/api/resources').send(resourceA)
        await request(server).post('/api/resources').send(resourceB)
        const resources = await db('resources')
        expect(resources).toHaveLength(2)
        expect(resources[0]).toMatchObject(resourceA)
        expect(resources[1]).toMatchObject(resourceB)
      }, 500)
      it('responds with the newly created resource', async () => {
        await db('resources').truncate()
        const res = await request(server).post('/api/resources').send(resourceA)
        expect(res.body).toMatchObject(resourceA)
      }, 500)
      it('rejects a resource with an existing name with an error status code', async () => {
        const res = await request(server).post('/api/resources').send(resourceA)
        const resources = await db('resources')
        expect(res.status + '').toMatch(/4|5/)
        expect(resources).toHaveLength(2)
      }, 500)
    })
  })

  // 👉 TASKS
  // 👉 TASKS
  // 👉 TASKS
  describe('tasks endpoints', () => {
    beforeEach(async () => {
      await db('projects').truncate()
      await db('projects').insert(projectA)
      await db('projects').insert(projectB)
      await db('tasks').truncate()
      await db('tasks').insert(taskA)
      await db('tasks').insert(taskB)
      await db('tasks').insert({ ...taskC, completed: 1 })
    })
    describe('[GET] /api/tasks', () => {
      it('can get all tasks in the table', async () => {
        const res = await request(server).get('/api/tasks')
        expect(res.body).toHaveLength(3)
      }, 500)
      it('each task contains notes and description and completed (as a boolean)', async () => {
        const res = await request(server).get('/api/tasks')
        expect(res.body[0]).toMatchObject({
          description: 'Do foo',
          notes: null,
          completed: false,
        })
        expect(res.body[1]).toMatchObject({
          description: 'Do bar',
          notes: 'Use Postman!',
          completed: false,
        })
        expect(res.body[2]).toMatchObject({
          description: 'Do baz',
          notes: 'Have fun!',
          completed: true,
        })
      }, 500)
      it('each task contains the project_name and the project_description', async () => {
        const res = await request(server).get('/api/tasks')
        expect(res.body[0]).toMatchObject({
          project_name: 'Web API',
          project_description: 'Build APIs',
        })
        expect(res.body[1]).toMatchObject({
          project_name: 'Web API',
          project_description: 'Build APIs',
        })
        expect(res.body[2]).toMatchObject({
          project_name: 'Databases',
          project_description: 'Learn SQL',
        })
      }, 500)
    })
    describe('[POST] /api/tasks', () => {
      it('can add a new task to the db', async () => {
        await db('tasks').truncate()
        await request(server).post('/api/tasks').send(taskA)
        await request(server).post('/api/tasks').send(taskB)
        await request(server).post('/api/tasks').send(taskC)
        const tasks = await db('tasks')
        expect(tasks).toHaveLength(3)
        expect(tasks[0]).toMatchObject({ ...taskA, completed: 0, project_id: 1 })
        expect(tasks[1]).toMatchObject({ ...taskB, completed: 0, project_id: 1 })
        expect(tasks[2]).toMatchObject({ ...taskC, completed: 1, project_id: 2 })
      }, 500)
      it('responds with the newly created task with the completed as a boolean', async () => {
        await db('tasks').truncate()
        const res = await request(server).post('/api/tasks').send(taskA)
        expect(res.body).toMatchObject({
          description: 'Do foo',
          notes: null,
          completed: false,
        })
      }, 500)
      it('rejects a task lacking a description with an error status code', async () => {
        await db('tasks').truncate()
        const res = await request(server).post('/api/tasks').send({ project_id: 1 })
        const tasks = await db('tasks')
        expect(res.status + '').toMatch(/4|5/)
        expect(tasks).toHaveLength(0)
      }, 500)
      it('rejects a task lacking a project_id with an error status code', async () => {
        await db('tasks').truncate()
        const res = await request(server).post('/api/tasks').send({ description: 'Execute order 66' })
        const tasks = await db('tasks')
        expect(res.status + '').toMatch(/4|5/)
        expect(tasks).toHaveLength(0)
      }, 500)
      it('rejects a task containing an invalid project_id with an error status code', async () => {
        await db('tasks').truncate()
        const res = await request(server).post('/api/tasks').send({ ...taskA, project_id: 66 })
        const tasks = await db('tasks')
        expect(res.status + '').toMatch(/4|5/)
        expect(tasks).toHaveLength(0)
      }, 500)
    })
  })
})
