import React from "react";
// import MyGoals from './MyGoals'
import { Link } from "react-router-dom";
import SetGoals from "./SetGoals";
import { useSelector } from "react-redux";

const MyGoals = ({ todos, setTodos, filteredGoals }) => {
  const results = useSelector((globalState) => globalState.goals);
  const newGoals = useSelector((globalState) => globalState.newGoals);
  const filteredResults = results.filter((goal) => {
    const id = goal.id;

    return newGoals.includes(id);
  });

  return (
    <>
      <div className="mygoals-card">
        <h3>
          <u>My Goals</u>
        </h3>

        {/* To display goals */}
        <div>
          <ul className="todo-list"></ul>
          {filteredResults.map((todo) => (
            <SetGoals
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              // key={todo.id}
              todo={todo}
              details={todo.details}
              filteredGoals={filteredGoals}
            />
          ))}
        </div>
      </div>

      {console.log("Current Goals")}
    </>
  );
};

export default MyGoals;
