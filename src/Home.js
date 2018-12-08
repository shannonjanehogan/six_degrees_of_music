import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { fetchPaths } from './actions/PathAction';

const Home = ({handleSearchClick}) => (
  <div className="Home">
    <p className="App-intro">
      Find the shortest paths from
    </p>
    <SearchBar className="First-search-bar"/>
    <i className="down arrow icon"></i>
    <SearchBar className="Second-search-bar"/>
    <Link to="/search-results">
    <button onClick={handleSearchClick} className="ui right labeled icon button">
      Go!
      <i className="right arrow icon"></i>
    </button>
  </Link>
</div>
)

const mapDispatchToProps = dispatch => ({
  handleSearchClick: (event) => {
    event.preventDefault()
    dispatch(fetchPaths())
  }
})

export default connect(null, mapDispatchToProps)(Home);
