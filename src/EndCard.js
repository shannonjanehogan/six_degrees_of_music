import React, { Component } from 'react';

// The last card will not have a song or featured by
class EndCard extends Component {
  render() {
    return (
      <div class="card">
        <div class="content">
          <i class="circular inverted teal big music icon"></i>
          <div class="header">
            {this.props.artistone}
          </div>
        </div>
      </div>
    );
  }
}

export default EndCard;
