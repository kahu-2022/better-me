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
  return db("Goals").delete().where("id", id);
}

function updateGoals(id, newStatus, db = connection) {
  console.log("Db", id, newStatus);
  return db("goals").select().where("id", id).update({ completed: newStatus });
}
// function updateGoals(id, db = connection) {
//   return db("goals").select().where("id", id).update({ completed: true });
// }

module.exports = {
  addGoals,
  getGoals,
  deleteGoals,
  updateGoals,
};
