import React from "react";
// I think you should remove the below import - was probably auto-imported
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { BrowserRouter as Router } from "react-router-dom";

import reducers from "./reducers";
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// const redirect = 'http://localhost:3000/home'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById("app")
  );
});
