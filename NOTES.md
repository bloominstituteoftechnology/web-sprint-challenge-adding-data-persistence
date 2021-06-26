## knexfile.js
- this allows referential integrity
- cascade (delete everything else that refers to that table) versus restrict (protects data that refers to other data)
- this line allows us to set up foreign keys and set up 

add:

    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done)
        }
    }

## install knex
[x] npm install knex --save

[x] npm install sqlite3 -- save

## install eslint
[x] npm i eslint

## install express
[x] npm install express --save

## create a knex file 
- knexfile.js
- this creates a knex file with environments

[x] knex init

## Install knex-cleaner
[x] npm install knex-cleaner

## Install Helmet
[x] npm install helmet --save

## install nodemon
[x] npm install --save-dev nodemon

## make migration file
[x] npx knex migrate:make first-migration

## run migration file to build the db
[x] npx knex migrate:up  
- builds the migration

// OR THIS, THIS IS MORE COMMON
[x] npx knex migrate:latest

## make the seed
[x] knex seed:make 00-cleanup

    knex seed:make 01-projects
    knex seed:make 02-resources
    knex seed:make 03-tasks
    knex seed:make 04-project-resources

> Code for Cleanup.js

        const cleaner = require('knex-cleaner');

        exports.seed = function(knex) {
        return cleaner.clean(knex, {
            mode: 'truncate', // resets ids
            ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
        });
        };

## seed the migration
[] npx knex seed:run


## Rules about Table Ordering in the migration

1) create tables that dont have foreign keys first

2) then create the ones that do use foreign keys

3) if you build it first, kill it last

## Workflow

1) knex init

2) make migration

3) build / run the migration

4) migrate latest - to build tables

5) run knex seed

6) make seed

code


NOTE: Every time you use knex or knex command, type 
npx in front

CAVEAT: Unless you install it globally, recommended to not install it globally

## Seeds

you need to put them in numerical order
00-cleanup

