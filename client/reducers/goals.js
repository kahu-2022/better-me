import { UPD_GOALS, GET_GOALS, ADD_GOALS, DEL_GOALS } from '../actions/goals'

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_GOALS:
      return action.goalArr

    case ADD_GOALS:
      return [...state, action.goals]

    case DEL_GOALS:
      return state.filter((goals) => goals.id !== action.id)

    case UPD_GOALS:
      return null // will need to figure this one out

    default:
      return state
  }
}

export default reducer
