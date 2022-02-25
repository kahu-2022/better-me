const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_GOALS":
      return action.goalArr;
    default:
      return state;
  }
};

export default reducer;
