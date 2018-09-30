import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Find the shortest paths from
        </p>
        <SearchBar/>
        <p className="App-intro">
          to
        </p>
        <SearchBar/>
        <Link to="/dashboard">
          <button class="ui right labeled icon button">
            Go!
            <i class="right arrow icon"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
