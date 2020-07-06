# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.
- [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.

The database should not allow resources with duplicate names.

A `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] a unique ID.
- [ ] a description of what needs to be done. This column is required.
- [ ] a notes column to add additional information.
- [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1.A RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, and, well, everything. Specifically, an RDBMS uses a relational model of data, as the name suggests. If you want to work on an RDBMS, you’ll need to learn its implementation language (often C), relational model theory, and a lot of nitty-gritty stuff about filesystem access, transactional logging, scalability, synchron.

SQL- the Structured Query Language -which is typically used to query the RDBMS. If you want to work with SQL, you just learn SQL and maybe a tiny bit of relational model theory for background.

2.A primary key is a table column that serves a special purpose. Each database table needs a primary key because it ensures row-level accessibility. If you choose an appropriate primary key, you can specify a primary key value, which lets you query each table row individually and modify each row without altering other rows in the same table. The values that compose a primary key column are unique; no two values are the same.

Each table has one-only one primary ky- which can consist of one or many columns. A concatenated primary key comprises two or more columns. In a single table, you might find several columns, or groups of columns, that might serve as a primary key and are called candidate keys. A table can have more than one candidate key, but only one candidate key can become the primary key for that table.

3.Primary keys and foreign keys are two types of constraints that can be used to enforce data integrity in SQL Server tables. These are important database objects.

4.A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table.a many-to-many relationship exists between customers and products: customers can purchase various products, and products -can be purchased by many customers.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [ ] a `project` can have multiple `tasks`.
  - [ ] a `task` belongs to only one `project`.
  - [ ] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
  - [ ] the same `resource` can be used in multiple `projects`.
  - [ ] when adding `projects` the client must provide a name, the description is optional.
  - [ ] when adding `resources` the client must provide a name, the description is optional.
  - [ ] when adding a `task` the client must provide a description, the notes are optional.
  - [ ] when adding a `task` the client must provide the `id` of an existing project.
  - [ ] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.
- [ ] Build an API with endpoints for:
  - [ ] adding resources.
  - [ ] retrieving a list of resources.
  - [ ] adding projects.
  - [ ] retrieving a list of projects.
  - [ ] adding tasks.
  - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add an endpoint to get a list of project resources.
- [ ] Add an endpoint to get a list of project tasks.
- [ ] Add an endpoint to see all projects using a particular resource.
- [ ] Add support for assigning `resources` directly to `tasks` in addition to adding them to `projects`

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
