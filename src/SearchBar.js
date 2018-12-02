import React from 'react';

const SearchBar = () => (
  <div className="ui search">
    <div className="ui icon input">
      <input className="prompt" type="text" placeholder="Name of Musician"/>
      <i className="search icon"></i>
    </div>
    <div className="results"></div>
  </div>
)

export default SearchBar;
