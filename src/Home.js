import React from 'react';
import { withRouter, Redirect } from "react-router-dom";
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { fetchPaths } from './reducers/paths/actions';

const Home = ({handleSearchClick, history}) => {
  //placeholder value
  const pathSuccess = 1
  if (pathSuccess) {
    return <Redirect to={{pathname: "/search-results"}} />;
  }

  return (
    <div className="Home">
      <p className="App-intro">
        Find the shortest paths from
      </p>
      <SearchBar className="First-search-bar"/>
      <i className="down arrow icon"></i>
      <SearchBar className="Second-search-bar"/>
      <button onClick={handleSearchClick} className="ui right labeled icon button">
        Go!
        <i className="right arrow icon"></i>
      </button>
    </div>)
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  handleSearchClick: (event) => {
    event.preventDefault()
    dispatch(fetchPaths())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
