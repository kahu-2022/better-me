import React from "react";
import SetGoals from "./SetGoals";
import { useSelector } from "react-redux";

function GoalList({ todos, setTodos, filteredGoals }) {
  const results = useSelector((globalState) => globalState.goals);
  const newGoals = useSelector((globalState) => globalState.newGoals);

  const filteredResults = results.filter((goal) => {
    const id = goal.id;

    return newGoals.includes(id);
  });

  return (
    <div className="todo-container">
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
      {/* <h3>{results}</h3> */}
    </div>
  );
}

export default GoalList;
