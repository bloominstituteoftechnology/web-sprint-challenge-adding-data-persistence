export const knexfile = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "./data/project.db3",
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        },
        // needed when using foreign keys
        pool: {
            afterCreate: (conn:any, done:any) => {
                // runs after a connection is made to the sqlite engine
                conn.run("PRAGMA foreign_keys = ON", done) // turn on FK enforcement
            },
        },
    },
}