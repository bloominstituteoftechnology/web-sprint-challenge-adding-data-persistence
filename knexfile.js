// module.exports = {

//   testing: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './dev.sqlite3'
//     },
//     migrations: {

//     }
//   },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

// };


// do not make changes to this file
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


  
  // module.exports = {
  //   testing: {
  //     client: 'sqlite3',
  //     connection: {
  //       filename: './dev.sqlite3'
  //     },

