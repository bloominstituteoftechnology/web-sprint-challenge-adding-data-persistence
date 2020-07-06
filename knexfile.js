module.exports = {

  development: {
    client: 'sqlite3', // this is our driver
    connection: {
      filename: './data/sprint_project.db3' // your file name for your database // or where you want the file to appear if it doesn't exist yet.
    }, 
		migrations: {
      directory: './data/migrations' // if you have a migrations folder, our database will be stored in side of it
    },
    seeds: {
      directory: './data/seeds' // our seed data will be all in one folder, that gets connected to the database. 
    },
    useNullAsDefault: true
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done) // turn on FK enforcement
    },
  },
};