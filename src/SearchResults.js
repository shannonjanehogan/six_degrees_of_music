import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Home from './Home';
import MusicianCard from './MusicianCard';
import logo from './logo.svg';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <Home/>
        <p className="App-intro"> Found 47 paths with 4 degrees of separation from Taylor Swift to Kanye: </p>
        <div class="ui cards">
          <MusicianCard
            artistone="Taylor Swift"
            feature="Featuring "
            artisttwo="Bryan Adams"
            song="Teardrops on My Guitar, 2004"
          />
          <i class="down arrow icon"></i>
          <MusicianCard
            artistone="Bryan Adams"
            feature="Featured by "
            artisttwo="Tim McGraw"
            song="Fuck High School Betches, 2006"
          />
        </div>
      </div>
    );
  }
}

export default SearchResults;
