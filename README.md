# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository. (Not Lambda's by mistake!)
- [ ] Implement the project in a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Create and push commits regularly: `git push origin <firstName-lastName>`.
- [ ] Do not move or rename any of the existing files or folders.

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Tables

Some of the tables described below require additional columns to meet all requirements.

A **project** is what needs to be done and is stored in a `projects` table with the following columns:

- [ ] `id` - unique
- [ ] `name` - required
- [ ] `description` - optional
- [ ] `completed` - cannot be `NULL` and defaults to "not completed" (use appropriate data type and constraints)

A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

- [ ] `id` - unique
- [ ] `name` - required and unique
- [ ] `description` - optional

A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

- [ ] `id` - unique
- [ ] `description` - required
- [ ] `notes` - optional
- [ ] `completed` - cannot be `NULL` and defaults to "not completed" (use appropriate data type and constraints)

### Requirements

Your finished project must meet all of the following requirements:

- [ ] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [ ] a `project` can have multiple `tasks`.
  - [ ] a `task` belongs to only one `project`.
  - [ ] a `project` can use multiple `resources`. Examples of `resources` are: computer, conference room, microphone, delivery van.
  - [ ] the same `resource` can be used in multiple `projects`.
  - [ ] when adding `projects` the client must provide a name, the description is optional.
  - [ ] when adding `resources` the client must provide a unique name, the description is optional.
  - [ ] when adding a `task` the client must provide a description, the notes are optional.
  - [ ] when adding a `task` the client must provide a `project_id` that points to the `id` of an existing project.
  - [ ] even if the `completed` values for tasks and projects are stored as integers, the client must be able to provide and obtain booleans.

- [ ] Build an API inside the `api` folder with endpoints for:
  1. `[POST] /api/resources` - adding a new resource obtains the newly created resource
  2. `[GET] /api/resources` - retrieving all resources
  3. `[POST] /api/projects` - adding a new project obtains the newly created project
  4. `[GET] /api/projects` - retrieving all projects
  5. `[POST] /api/tasks` - adding a new task obtains the newly created task
  6. `[GET] /api/tasks` - retrieving all tasks -  **Each task must include `project_name` and `project_description` so you will need to join tables**

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

**IMPORTANT:** Work on stretch goals in a **new branch**. You can branch off `<firstName-lastName>` by executing `git checkout -b stretch`.

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add an endpoint to get a list of project resources.
- [ ] Add an endpoint to get a list of project tasks.
- [ ] Add an endpoint to see all projects using a particular resource.

## Submission format

There are two possible ways to submit this project to Canvas. Lambda Staff will let you know which one applies:

1. Submitting a pull request to merge `<firstName-lastName>` (or `stretch` if you finished any stretch goals) branch into `main`.
2. Setting up your fork settings on Github to submit via Codegrade by pushing commits to your `<firstName-lastName>` branch.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between Relational Databases and SQL.
2. Why do tables need a Primary Key?
3. What is the name given to a table column that references the Primary Key on another table?
4. What do we need in order to have a _many to many_ relationship between two tables?
