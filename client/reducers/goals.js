const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_GOALS":
      return action.goalArr;

    case "ADD_GOALS":
      return action.goals;
    default:
      return state;
  }
};

export default reducer;
