import React, { useEffect } from "react";
import AddTodo from "./Login";
import request from "superagent";
import Quotes from "./Quotes";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <Quotes />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
