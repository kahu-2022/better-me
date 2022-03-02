import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
