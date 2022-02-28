const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_GOALS':
      return action.goalArr

    case 'ADD_GOALS':
      return [...state, action.goals]

    case 'DEL_GOALS':
      return state.filter((goals) => goals.id !== action.id)

    default:
      return state
  }
}

export default reducer
