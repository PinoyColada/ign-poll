require('dotenv').config()
module.exports = {
  development: {
    database: "ign-foo-poll_development",
    dialect: "postgres"
  },
  test: {
    database: "ign-foo-poll_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}