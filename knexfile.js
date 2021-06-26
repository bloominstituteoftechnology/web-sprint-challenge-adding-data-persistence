const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: '/Users/mochi/Desktop/lambda-code/lambda-unit-four/web-sprint-challenge-adding-data-persistence/data/dev.sqlite3' }, 
    seeds: { directory: './data/seeds'},
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/dev.sqlite3' },
  }
}


