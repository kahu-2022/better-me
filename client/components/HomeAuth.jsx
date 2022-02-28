import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import { thunkGetAllGoals } from "../actions/goals";

function HomeAuth() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState(""); // state for form to add new goal
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredGoals, setFilteredGoals] = useState([]);

  // On load when the app runs
  useEffect(() => {
    dispatch(thunkGetAllGoals());
  }, []);

  //   useEffect(() => {
  //     filterHandler();
  //   }, [todos, status]);

  const inputTextHandler = (evt) => {
    setInputText(evt.target.value);
  };

  const submitGoalHandler = (evt) => {
    evt.preventDefault();
    setTodos(
      [
        ...todos,
        {
          details: inputText,
          completed: false,
        },
      ],
      dispatch(thunkAddNewGoal(inputText))
    );
    setInputText("");
  };

  const results = useSelector((globalState) => globalState.goals);
  const newGoals = useSelector((globalState) => globalState.newGoals);

  const filteredResults = results.filter((goal) => {
    const id = goal.id;

    return newGoals.includes(id);
  });

  return (
    isAuthenticated && (
      <div>
        <form>
          <input
            value={inputText}
            onChange={inputTextHandler}
            className="goalInput-text-box"
            type="text"
            placeholder="Enter your goal here..."
          ></input>
        </form>

        <div className="goals-card">
          {/* To display goals */}
          <div>{filteredResults.map((todo) => {})}</div>

          <div>
            <button
              onClick={submitGoalHandler}
              className="goals-card-button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

        {/* <iframe className="borat" src="https://giphy.com/embed/Od0QRnzwRBYmDU3eEO" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}

        {console.log("Home page with auth")}
      </div>
    )
  );
}

export default HomeAuth;
