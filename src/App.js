import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i class="circular inverted teal big music icon"></i>
          <h1 className="App-title">Six Degrees of Music</h1>
        </header>
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
