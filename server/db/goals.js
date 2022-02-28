const connection = require("./connection");

function addGoals(goals, db = connection) {
  // const objGoals = JSON.parse(goals);
  // console.log("Db func", goals);
  return db("goals").insert(goals);
}

function getGoals(db = connection) {
  return db("goals").select();
}

function deleteGoals(id, db = connection) {
  return db('Goals')
  .delete()
  .where('id', id)
}

module.exports = {
  addGoals,
  getGoals,
  deleteGoals
};
