const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_GOALS":
      return action.goalArr;

    case "ADD_GOALS":
      return [...state, action.goals];

    case "DEL_GOALS":
      return state.filter((goals) => goals.id !== action.id);

    case "PATCH_GOALS":
      console.log("reduce", action.id, action.newStatus);
      return state.map((goal) => {
        if (goal.id === action.id) {
          return (goal.completed = action.newStatus);
        } else {
          return goal;
        }
      });

    // case "PATCH_GOALS":
    //   return state.map((goal) => {
    //     state.filter((goals) => goals.completed !== action.completed);
    //   });

    default:
      return state;
  }
};

export default reducer;
