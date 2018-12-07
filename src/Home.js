import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick(e) {
    e.preventDefault();
    // The fetch library does not support search params on GET requests, so this
    // is the workaround recommended by the library maintainers:
    // See: https://github.com/github/fetch/issues/256
    let url = new URL("http://127.0.0.1:5000/path"),
    params = { artist_id_one: 38661, artist_id_two: 69866 }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url, {
      method: 'GET',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }
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
        <i className="down arrow icon"></i>
        <SearchBar className="Second-search-bar"/>
        <Link to="/search-results">
          <button onClick={this.handleSearchClick} className="ui right labeled icon button">
            Go!
            <i className="right arrow icon"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
