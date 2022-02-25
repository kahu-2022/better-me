import request from "superagent";

export function fetchAllGoals() {
  return request.get("/api/v1/goals").then((res) => res.body);
}

export function postNewGoals(newGoal) {
  return request
    .post("/api/v1/goals")
    .send(newGoal)
    .then((res) => res.body);
}
