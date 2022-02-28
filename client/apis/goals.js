import request from 'superagent'

export function fetchAllGoals () {
  return request
    .get('/api/v1/goals')
    .then((res) => res.body)
}

export function postNewGoals (goals) {
  // console.log("apigoals", goals);
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
