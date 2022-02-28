import { fetchAllGoals, postNewGoals, deleteGoals } from "../apis/goals";

export const ADD_GOALS = "ADD_GOALS";
export const GET_GOALS = "GET_GOALS";
export const DEL_GOALS = "DEL_GOALS";

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

export function delGoals(id) {
  return {
    type: DEL_GOALS,
    id
  }
}

// thunk FOR GET GOALS

export function thunkGetAllGoals() {
  return (dispatch) => {
    fetchAllGoals().then((goals) => {
      dispatch(getGoals(goals));
    });
  };
}

// thunk FOR ADD GOALS

export function thunkAddNewGoal(goals) {
  // console.log("thunk", typeof goals, goals);
  const newGoals = { details: goals, completed: false };

  return (dispatch) => {
    // console.log("afterThunk", goals);
    postNewGoals(newGoals).then((goals) => {
      dispatch(addGoals(goals));
    });
  };
}


// thunk FOR DELETE GOALS

export function thunkDelGoal(id) {
  return (dispatch) => {
    deleteGoals(id).then(() =>{
      dispatch(delGoals(id))
    })
  }
}

