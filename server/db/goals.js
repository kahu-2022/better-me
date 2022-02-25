const connection = require("./connection");

function addGoals(goals, db = connection) {
  return db("goals").insert(goals);
}

function getGoals(db = connection) {
  return db("goals").select();
}

module.exports = {
  addGoals,
  getGoals,
};
