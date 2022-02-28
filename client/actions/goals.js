import { fetchAllGoals, postNewGoals, deleteGoals } from '../apis/goals'

export const ADD_GOALS = 'ADD_GOALS'
export const GET_GOALS = 'GET_GOALS'
export const DEL_GOALS = 'DEL_GOALS'

export function getGoals (goalArr) {
  return {
    type: GET_GOALS,
    goalArr
  }
}

export function addGoals (goals) {
  return {
    type: ADD_GOALS,
    goals
  }
}

export function delGoals (id) {
  return {
    type: DEL_GOALS,
    id
  }
}

// will need a new action and thunk for complete button


// thunk FOR GET GOALS

export function thunkGetAllGoals () {
  return (dispatch) => {
    fetchAllGoals()
      .then((goals) => {
        dispatch(getGoals(goals))
        return null
      })
      .catch(err => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
        return null
      })
  }
}

// thunk FOR ADD GOALS

export function thunkAddNewGoal (goals) {
  // console.log("thunk", typeof goals, goals);
  const newGoals = { details: goals, completed: false }

  return (dispatch) => {
    // console.log("afterThunk", goals);
    postNewGoals(newGoals)
      .then((goalsArr) => {
        console.log('goalsArr', goalsArr)
        const goalsId = goalsArr[0]
        newGoals.id = goalsId
        dispatch(addGoals(newGoals))
        return null
      })
      .catch(err => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
        return null
      })
  }
}

// thunk FOR DELETE GOALS

export function thunkDelGoal (id) {
  return (dispatch) => {
    deleteGoals(id)
      .then(() => {
        dispatch(delGoals(id))
        return null
      })
      .catch(err => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
        return null
      })
  }
}
