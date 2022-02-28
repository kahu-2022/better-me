// Comment: Remove all these unused imports and pieces of code 


import React from "react";
// import Nav from './NavNoAuth'
// import Login from './SignIn'
// import Logout from './SignOut'
import { useAuth0 } from "@auth0/auth0-react";
import Form, { inputTextHandler, submitGoalHandler } from "./Form";
// import GoalList from "./GoalList";
// import { Routes, Route } from 'react-router-dom'

// import CompletedGoals from './CompletedGoals'
// import MyGoals from './MyGoals'

function HomeAuth({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  submitGoalHandler,
  inputTextHandler,
  //   filteredGoals,
}) {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <Form>
          <input
            className="goalInput-text-box"
            type="text"
            placeholder="Enter your goal here..."
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
          ></input>
        </Form>

        <div className="goals-card">
          {/* To display goals */}
          <div>
            {/* <GoalList
              //   filteredGoals={filteredGoals}
              setTodos={setTodos}
              todos={todos}
            /> */}
          </div>

          <div>
            <button
              onClick={submitGoalHandler}
              type="submit"
              className="goals-card-button"
            >
              Submit
            </button>
          </div>
        </div>

        {/* <iframe className="borat" src="https://giphy.com/embed/Od0QRnzwRBYmDU3eEO" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}

        {console.log("Home page with auth")}
      </>
    )
  );
}

export default HomeAuth;
