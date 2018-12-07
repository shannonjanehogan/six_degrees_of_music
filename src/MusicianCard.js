import React from 'react';

const MusicianCard = ({artistone, feature, artisttwo, song}) => (
  <div className="card">
    <div className="content">
      <i className="circular inverted teal big music icon"></i>
      <div className="header">
        {artistone}
      </div>
      <div className="meta">
        {feature} {artisttwo}
      </div>
      <div className="description">
        {song}
      </div>
    </div>
  </div>
)

export default MusicianCard;
