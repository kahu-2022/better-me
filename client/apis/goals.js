import request from "superagent";

export function fetchAllGoals() {
  return request.get("/api/v1/goals").then((res) => res.body);
}

export function postNewGoals(goals) {
  console.log("apigoals", typeof goals);
  return request
    .post("/api/v1/goals")
    .send(goals)
    .then((res) => console.log("res.body", res.body));
}
