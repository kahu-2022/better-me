const connection = require("./connection");
const { generateHash } = require("authenticare/server");
const snakeCase = require("snakecase-keys");
// const camelCase = require("camelcase-keys");

//to create a new user in the db
function createUser(user, db = connection) {
  const newUser = { ...user };
  return generateHash(newUser.password).then((passwordHash) => {
    newUser.hash = passwordHash;
    delete newUser.password;
    return db("users").insert(newUser, id);
  });
}

// to find existing users
function userInDb(email, db = connection) {
  return db("users").where("email", email);
}

// getting user by email
function getUserbyEmail(email, db = connection) {
  return db("users").whereNull(email);
}

// // trying
function getUser(db = connection) {
  return db("users").select();
}

function getUserIfExists(user, db = connection) {
  return db("users")
    .select()
    .where("first_name", user.first_name)
    .where("last_name", user.last_name)
    .then((res) => {
      if (res.length === 0) {
        return addUserwithoutAccount(user).then((idArr) => {
          console.log(idArr);
          return idArr[0];
        });
      } else {
        return res;
      }
    });
}
function addUserwithoutAccount(person, db = connection) {
  return db("users").insert(snakeCase(person));
}

module.exports = {
  createUser,
  userInDb,
  getUserbyEmail,
  getUser,
  getUserIfExists,
  addUserwithoutAccount,
};
