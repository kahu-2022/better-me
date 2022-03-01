import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetGoals from "./SetGoals";

import { useAuth0 } from "@auth0/auth0-react";
import { thunkGetAllGoals, thunkUpdateGoals } from "../actions/goals";

const MyGoals = ({ todos, setTodos, filteredGoals }) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(!complete);

  useEffect(() => {
    dispatch(thunkGetAllGoals());
  }, [complete]);

  const { isAuthenticated } = useAuth0();
  const newGoals = useSelector((globalState) => globalState.newGoals);
  const results = useSelector((globalState) => globalState.goals);

  // const filteredResults = results.filter((goal) => {
  //   const id = goal.id;

  //   return newGoals.includes(id);
  // });

  const submitCompleteHandler = (id) => {
    // evt.preventDefault();
    console.log("submit", id);
    setComplete(!complete);
    dispatch(thunkUpdateGoals(id, complete));
  };

  return (
    isAuthenticated && (
      <>
        <div className="mygoals-card">
          <h3>
            <u>My Goals</u>
          </h3>

          {/* To display goals */}
          <div className="myGoalsContainer">
            <ul className="addedgoals">
              {results.map((goals) => {
                console.log(goals);
                if (goals.completed === 0) {
                  return (
                    <li key={goals.details}>
                      {goals.details}
                      <button onClick={() => submitCompleteHandler(goals.id)}>
                        Test
                      </button>
                    </li>
                  );
                } else {
                  return (
                    <li key={goals.details}>
                      <del>{goals.details}</del>
                      <button onClick={() => submitCompleteHandler(goals.id)}>
                        Test
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </>
    )
  );
};

export default MyGoals;
