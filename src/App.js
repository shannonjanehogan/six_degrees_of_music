import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js'
import SearchResults from './SearchResults.js'
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <i className="circular inverted teal big music icon"></i>
      <h1 className="App-title">Six Degrees of Music</h1>
    </header>
    <Route exact path="/" component={Home}/>
    <Route exact path="/search-results" component={SearchResults}/>
  </div>
)

export default App
