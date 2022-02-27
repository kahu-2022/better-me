import { fetchAllGoals, postNewGoals } from "../apis/goals";

export const ADD_GOALS = "ADD_GOALS";
export const GET_GOALS = "GET_GOALS";

export function getGoals(goalArr) {
  return {
    type: GET_GOALS,
    goalArr,
  };
}

export function addGoals(goals) {
  return {
    type: ADD_GOALS,
    goals,
  };
}

// thunk

export function thunkGetAllGoals() {
  return (dispatch) => {
    fetchAllGoals().then((goals) => {
      dispatch(getGoals(goals));
    });
  };
}

export function thunkAddNewGoal(goals) {
  console.log("thunk", typeof goals, goals);
  const newGoals = { details: goals, completed: false };

  return (dispatch) => {
    console.log("afterThunk", goals);
    postNewGoals(newGoals).then((goals) => {
      dispatch(addGoals(goals));
    });
  };
}
