import React from "react";
import { useDispatch } from "react-redux";

import { thunkAddNewGoal } from "../actions/goals";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  const dispatch = useDispatch();

  const inputTextHandler = (evt) => {
    setInputText(evt.target.value);
  };

  const submitTodoHandler = (evt) => {
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

  // const statusHandle = (evt) => {
  //   setStatus(evt.target.value);
  // };

  return (
    <div>
      <h1>Test Set Goals</h1>
      <form>
        <input
          value={inputText}
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
        />
        <button
          onClick={submitTodoHandler}
          className="todo-input"
          type="submit"
        >
          Test
        </button>
      </form>
    </div>
  );
}

export default Form;
