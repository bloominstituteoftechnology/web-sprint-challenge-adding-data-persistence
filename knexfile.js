module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/projects.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    //------------------------------------------------------------------------//
    // ENABLE FOREIGN KEY CONSTRAINTS IN SQLITE
    //------------------------------------------------------------------------//
    // The following "POOL:" property is required for foreign key constraints to
    // be enforced by SQLite. Without this section, even if you have foreign
    // keys defined, and foreign key constraints defined, the database will
    // allow the insertion of records with foreign key field values that are
    // invalid (i.e. that don't exist as a primary key in the "parent" table.)
    //
    // Note also that the knex-cleaner package will not work properly if foreign
    // key constraints are not enabled for SQLite with this property.
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
};
