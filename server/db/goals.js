const connection = require('./connection')

function addGoals (goals, db = connection) {
  return db('goals')
    .insert(goals, 'id')
}

function getGoals (db = connection) {
  return db('goals')
    .select()
}

function deleteGoals (id, db = connection) {
  return db('goals')
    .delete()
    .where('id', id)
}

function updateGoals (id, newStatus, db = connection) {
  return db('goals')
    .select()
    .where('id', id)
    .update({ completed: newStatus })
}

module.exports = {
  addGoals,
  getGoals,
  deleteGoals,
  updateGoals
}
