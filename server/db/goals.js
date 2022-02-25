const connection = require("./connection");

function addGoals(goals, db = connection) {
  // const objGoals = JSON.parse(goals);
  console.log("Db func", goals);
  return db("goals").insert(goals);
}

function getGoals(db = connection) {
  return db("goals").select();
}

module.exports = {
  addGoals,
  getGoals,
};
