import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Router, Route, browserHistory} from 'react-router'

import LoginPage from './component/LoginPage'
import MenuPage from './component/MenuPage'
import AlertPage from './component/AlertPage'
import EventPage from './component/EventPage'
import MessagePage from './component/MessagePage'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './component/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './component/api'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(api
)))

const routes = 
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='login' component={LoginPage} />
        <Route path='menu' component={MenuPage} />
        <Route path='alerts' component={AlertPage} />
        <Route path='events' component={EventPage} />
        <Route path='message' component={MessagePage} />*/}
      </Route>
    </Router>
  </Provider>

ReactDOM.render(
  /*<App />,*/
  routes, 
  document.getElementById('root')
);
