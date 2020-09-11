# Set Up Directory: 

* Ran 'touch .gitignore', added a proper body to file *
* Ran 'npm init -y' for package.json generation 

# Initial dependencies: 
- Express
- cors 
- helmet 
- nodemon (-D)

# Server Set up 
- Server.js
- Index.js
## Sanity check: res.send message appearing in Postman

# Database set up
# Dependencies: 
- knex (local and global)
- sqlite3 

# Knex commands 
- run knex init for knexfile.js

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

## Seed these two new tables in preparation for the connected table
- Run 'knex seed:make 001-projects' 
- build seeds 
- Run 'knex migreate:make 002-resources' 
- build seeds 

## projects_resources table: fields: 3 names: primary key, resource_name, resource_details
- run 'knex migrate:make projects_resources-table' to generate migration
- In the migration folder - write projects_resources table 

- run knex migrate:latest







