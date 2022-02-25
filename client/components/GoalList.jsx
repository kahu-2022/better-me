import React from "react";
import SetGoals from "./SetGoals";
// import { useSelector } from "react-redux";

function GoalList({ todos, setTodos, filteredTodos }) {
  //   const results = useSelector((globalState) => globalState.goals);

  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {filteredTodos.map((todo) => (
        <SetGoals
          setTodos={setTodos}
          todos={todos}
          // key={todo.id}
          todo={todo}
          text={todo.text}
          filteredTodos={filteredTodos}
        />
      ))}
      {/* <h3>{results}</h3> */}
    </div>
  );
}

export default GoalList;
