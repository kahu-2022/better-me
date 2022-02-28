const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GOALS':
      return [...state, action.goals.id]

    default:
      return state
  }
}

export default reducer
