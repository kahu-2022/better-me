import React from "react";

function SetGoals({ text, setTodos, todo, todos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.text !== todo.text));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.text === todo.text) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default SetGoals;
