import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AddTodo from "./Login";
import "./App.css";
import Quotes from "./Quotes";
import Form from "./Form";
import GoalList from "./GoalList";
import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import NavNoAuth from "./NavNoAuth";
import NavAuth from "./NavAuth";
import HomeAuth from "./HomeAuth";
import HomeNoAuth from "./HomeNoAuth";
import CompletedGoals from "./CompletedGoals";
import MyGoals from "./MyGoals";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";

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
        setFilteredGoals(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredGoals(todos.filter((todo) => todo.uncompleted === false));
        break;
      default:
        setFilteredGoals(todos);
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
  // const currentRoute = browser.windows.getCurrent()

  // if (currentRoute == )

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

      <NavAuth />
      <NavNoAuth />
      {/* <HomeAuth /> */}
      <Divider sx={{ background: "#2C3333", mt: 3.5 }} variant="middle" />
      <HomeNoAuth />
      <Routes>
        {/* <Route path='/' element={<HomeNoAuth />} /> */}
        <Route path="/" element={<HomeAuth />} />
        <Route path="/mygoals" element={<MyGoals />} />
        <Route path="/completed" element={<CompletedGoals />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
