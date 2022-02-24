import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <Auth0Provider
    domain={'dev-jjh053qk.us.auth0.com'}
    clientId={'evH7USq4j1XUfZahoP4DzsZoxza7Kuex'}
    redirectUri={window.location.origin}
    audience='https://betterme/api'>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
