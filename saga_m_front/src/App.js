import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router'

class App extends Component {
  render() {
      const page = this.props.children
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>SAGA-M App</h1>
          
        </div>

          <div>
            <p> 
              <span><Link to='/menu'>Home | </Link></span>
              <span><Link to='/alerts'>Alerts | </Link></span>
              <span><Link to='/events'>Events | </Link></span>
              <span><Link to='/message'>Message</Link></span>
            </p>
            {page}
          </div>

      </div>
    );
  }
}

export default App;
