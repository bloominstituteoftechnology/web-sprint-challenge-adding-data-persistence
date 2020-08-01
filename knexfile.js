// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    }
  },
  migrations: {
    directory: './data/migrations/20200801090754_project_table.js'
  },
  seeds: {
    directory: 'data/seeds'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run(`PRAGMA foreign_keys = ON`, done);
    }
  }

};
