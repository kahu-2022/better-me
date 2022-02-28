import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetGoals from "./SetGoals";

import { useAuth0 } from "@auth0/auth0-react";
import { thunkGetAllGoals } from "../actions/goals";

const MyGoals = ({ todos, setTodos, filteredGoals }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkGetAllGoals());
  }, []);

  const { isAuthenticated } = useAuth0();
  const newGoals = useSelector((globalState) => globalState.newGoals);
  const results = useSelector((globalState) => globalState.goals);

  const filteredResults = results.filter((goal) => {
    const id = goal.id;

    return newGoals.includes(id);
  });
  return (
    isAuthenticated && (
      <>
        <div className="mygoals-card">
          <h3>
            <u>My Goals</u>
          </h3>

          {/* To display goals */}
          <div>
            <ul>
              {results.map((goals) => (
                <li>
                  {goals.details} {goals.completed}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  );
};

export default MyGoals;
