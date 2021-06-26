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

## Create db (?)
[] npx knex migrate:up  
- builds the migration

// TRY THIS
[] npx knex migrate:latest

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

