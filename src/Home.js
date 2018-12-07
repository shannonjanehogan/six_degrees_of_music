import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import qs from 'qs';
import { connect } from 'react-redux';
import { fetchPaths } from './actions/PathAction';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick(e) {
    e.preventDefault();
    fetchPaths();
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

const mapDispatchToProps = dispatch => ({
  fetchPaths
})

export default connect(null, mapDispatchToProps)(Home);
