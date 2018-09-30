import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    return (
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Name of Musician"/>
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
    );
  }
}

export default SearchBar;
