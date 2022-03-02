import request from 'superagent'

export function fetchAllGoals () {
  return request
    .get('/api/v1/goals')
    .then((res) => res.body)
}

export function postNewGoals (goals) {
  return request
    .post('/api/v1/goals')
    .send(goals)
    .then((res) => res.body)
}

export function deleteGoals (id) {
  return request
    .del(`/api/v1/goals/${id}`)
    .then((res) => res.body)
}

export function updateGoals (id, newStatus) {
  return request
    .patch(`/api/v1/goals/${id}`)
    .send({ completed: newStatus })
    .then((res) => {
      res.body
    })
    .catch((err) => {
      const errMessage = err.response?.text || err.message
      console.log(errMessage)
      return null
    })
}
