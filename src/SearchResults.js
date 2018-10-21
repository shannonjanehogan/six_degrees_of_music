import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Home from './Home';
import logo from './logo.svg';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <Home/>
        <p> Found 47 paths with 4 degrees of separation from Taylor Swift to Kanye: </p>
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <i class="circular inverted teal big music icon"></i>
              <div class="header">
                Taylor Swift
              </div>
              <div class="meta">
                Featured Bryan Adams
              </div>
              <div class="description">
                Teardrops on My Guitar, 2004
              </div>
            </div>
          </div>
          <i class="down arrow icon"></i>
          <div class="card">
            <div class="content">
              <i class="circular inverted teal big music icon"></i>
              <div class="header">
                Bryan Adams
              </div>
              <div class="meta">
                Featured by Tim McGraw
              </div>
              <div class="description">
                Fuck High School Betches, 2006
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
