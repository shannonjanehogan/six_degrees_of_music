import React from 'react';

const MusicianCard = ({artistOne, feature, artistTwo, song}) => (
  <div className="card">
    <div className="content">
      <i className="circular inverted teal big music icon"></i>
      <div className="header">
        {artistOne}
      </div>
      <div className="meta">
        {feature} {artistTwo}
      </div>
      <div className="description">
        {song}
      </div>
    </div>
  </div>
)

export default MusicianCard;
