# Set Up Directory: 
- Run 'touch .gitignore', added a proper body to file 
- Run 'npm init -y' for package.json generation 

# Initial dependencies: 
- Express
- cors 
- helmet 
- nodemon (-D)

# Server Set up 
- api/Server.js
- Index.js
## Sanity check: res.send message appearing in Postman

# Database set up
# Dependencies: 
- knex (local and global)
- sqlite3 

# Knex commands 
- run knex init for knexfile.js

# Create db-config
- Create a db-config.js file in the data folder (other common names: connection.js)

## Projects table: fields: 4 names: primary key, project_name, project_details, completed
- run knex migrate:make projects-table to generate migration
- In the migration folder - write projects table 

- run knex migrate:latest
## Sanity check: check out database in SQLiteStudio [✅ table appears!]

## Resources table: fields: 3 names: primary key, resource_name, resource_details
- run knex migrate:make resources-table to generate migration
- In the migration folder - write resources table 

- run knex migrate:latest
## Sanity check: check out database in SQLiteStudio [✅ table appears!] 

# Seed these two new tables in preparation for the connected table
- Run 'knex seed:make 001-projects' 
- build seeds in seed folder
- Run 'knex seed:make 002-resources' 
- build seeds 

# Projects_resources table: fields: 3 names: primary key, resource_name, resource_details
- run 'knex migrate:make projects_resources-table' to generate migration
- In the migration folder - write projects_resources table 

- run knex migrate:latest
## Sanity check: check out database in SQLiteStudio [✅ table appears!] 

# TRIPLE CHECK THE SEED DATA FOR ACCURACY, CHECK THOSE ID NUMBERS
## Add that seed data! Plant it baby!
- Run 'knex seed:run'
## Sanity check: Refresh the database and see that the seeds have made it [✅ data appears!] 

# 🎆🎆🎆 Now there's data in the database!🧨 🎆🎆🎆 # 

# Make a router
- created projects folder, with projects-model.js and projects-router.js
- set up the projects router and import into server.js

# Make a model
- in projects-model.js make a model for find, findById
- import into projects router 






