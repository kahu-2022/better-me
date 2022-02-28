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
  const [inputText, setInputText] = useState(""); // state for form to add new goal
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredGoals, setFilteredGoals] = useState([]);

  // On load when the app runs
  useEffect(() => {
    dispatch(thunkGetAllGoals());
  }, []);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const results = useSelector((globalState) => globalState.goals);

  // function to keep completed task and display when selected
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredGoals(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredGoals(todos.filter((todo) => todo.uncompleted === false));
        break;
      default:
        setFilteredGoals(todos);
    }
  };

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
          filteredGoals={filteredGoals}
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
