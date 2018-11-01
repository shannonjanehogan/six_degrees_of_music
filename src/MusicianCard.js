import React, { Component } from 'react';

class MusicianCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <i className="circular inverted teal big music icon"></i>
          <div className="header">
            {this.props.artistone}
          </div>
          <div className="meta">
            {this.props.feature} {this.props.artisttwo}
          </div>
          <div className="description">
            {this.props.song}
          </div>
        </div>
      </div>
    );
  }
}

export default MusicianCard;
