import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AddTodo from "./Login";
import "./App.css";
import Quotes from "./Quotes";
import Form from "./Form";
import GoalList from "./GoalList";

import { thunkGetAllGoals } from "../actions/goals";

function App() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // On load when the app runs
  useEffect(() => {
    dispatch(thunkGetAllGoals());
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const results = useSelector((globalState) => globalState.goals);

  // function to keep completed task and display when selected
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.uncompleted === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  // saving it to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // save to global state

  return (
    <>
      <header className="header">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <GoalList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </header>
      <ul>
        {results.map((goals) => (
          <li>{goals.details}</li>
        ))}
      </ul>
      <footer>
        <Quotes />
      </footer>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
