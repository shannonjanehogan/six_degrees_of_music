import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import qs from 'qs';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick(e) {
    e.preventDefault();
    return fetch('http://localhost:8080/api/search/new', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: qs.stringify({
        artistone: "Taylor Swift",
        artisttwo: "Kanye West",
      }),
    })
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="Home">
        <p className="App-intro">
          Find the shortest paths from
        </p>
        <SearchBar className="First-search-bar"/>
        <i class="down arrow icon"></i>
        <SearchBar className="Second-search-bar"/>
        <Link to="/search-results">
          <button onClick={this.handleSearchClick} class="ui right labeled icon button">
            Go!
            <i class="right arrow icon"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
