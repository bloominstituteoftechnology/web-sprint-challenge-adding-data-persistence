# Adding Data Persistence Sprint Challenge

## Tools

- Node >= 16.x
- NPM >= 8.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)

## Project Set Up

- Fork, clone, and `npm install`.
- Run tests locally executing `npm test`.

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Files to Complete

1. `package.json`
2. `index.js`
3. `api/server.js`
4. `model.js` inside `api/project`, `api/resource` and `api/task`
5. `router.js` inside `api/project`, `api/resource` and `api/task`
6. migration file(s)
7. seed file(s) **optional**

### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file. The tests depend on these scripts being correct!

### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [ ] `project_id` - primary key
  - [ ] `project_name` - required
  - [ ] `project_description` - optional
  - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [ ] `resource_id` - primary key
  - [ ] `resource_name` - required and unique
  - [ ] `resource_description` - optional

- [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [ ] `task_id` - primary key
  - [ ] `task_description` - required
  - [ ] `task_notes` - optional
  - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

- [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [ ] `[POST] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Important Notes:**

- Run tests locally by executing `npm run test`. Tests will be very broken until you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- Delete `test.db3` and `database.db3` and re-run migrations and tests, if you suspect half-finished code left your databases in a broken state.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.
