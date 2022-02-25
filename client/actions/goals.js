import { fetchAllGoals, postNewGoals } from "../apis/goals";

export const ADD_GOALS = "ADD_GOALS";

export function addGoals(goalArr) {
  return {
    type: ADD_GOALS,
    goalArr,
  };
}

// thunk

export function thunkGetAllGoals() {
  return (dispatch) => {
    fetchAllGoals().then((goals) => {
      dispatch(addGoals(goals));
    });
  };
}

// thunk to add Goal
export function thunkAddNewGoal(goals, newGoal) {
  newGoal = { ...goals, details: inputText, completed: false };

  return (dispatch) => {
    postNewGoals(newGoal).then((goals) => {
      dispatch(addGoals(goals));
    });
  };
}
