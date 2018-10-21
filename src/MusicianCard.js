import React, { Component } from 'react';

class MusicianCard extends Component {
  render() {
    return (
      <div class="card">
        <div class="content">
          <i class="circular inverted teal big music icon"></i>
          <div class="header">
            {this.props.artistone}
          </div>
          <div class="meta">
            {this.props.feature} {this.props.artisttwo}
          </div>
          <div class="description">
            {this.props.song}
          </div>
        </div>
      </div>
    );
  }
}

export default MusicianCard;
