import React from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import { fetchPaths } from './reducers/paths/actions';

const PageBody = ({pathSuccess}) => {
  if (pathSuccess) {
    return (<SearchResults />)
  }

  return null
}

const Home = ({handleSearchClick, history, paths: {pathSuccess}}) => {
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
      <PageBody pathSuccess={pathSuccess} />
    </div>
  )
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
