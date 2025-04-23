require('dotenv').config();


module.exports = {
    development: {
      username: process.env.DB_USER || 'user',  // Your DB username
      password: process.env.DB_PASSWORD || 'password',  // Your DB password
      database: process.env.DB_NAME || 'kanban_db',  // Your DB name
      host: process.env.DB_HOST || 'localhost',  // The host where your DB is running
      dialect: 'postgres',
      logging: false,  // Set to true for more verbose logging
    },
    test: {
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'kanban_db_test',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: false,
    },
    production: {
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'kanban_db_prod',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // For cloud databases like Heroku
        },
      },
    },
  };
  