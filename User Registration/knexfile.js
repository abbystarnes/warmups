module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/user_registration'
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/user_registration'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
