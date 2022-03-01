const { generateHash } = require('authenticare/server')

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      return Promise.all(
        [
          {
            id: 1,
            email: 'admin',
            password: 'betterme',
            first_name: 'New',
            last_name: 'Year'
          }
        ].map((user) => {
          return generateHash(user.password).then((hash) => {
            user.hash = hash
            delete user.password
            return user
          })
        })
      ).then((users) => {
        return knex('users').insert(users)
      })
    })
}
