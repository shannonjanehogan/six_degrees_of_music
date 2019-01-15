import React from 'react';
import MusicianCard from './MusicianCard';

const MusicianGroup = ({artistOne, feature, artistTwo, song, index, isLastCard}) => {
  // TODO rename to ui card and fix resulting css issue
    if (!isLastCard) {
      return (<div className="ui cards">
        <MusicianCard
          artistOne={artistOne}
          feature={feature}
          artistTwo={artistTwo}
          song={song}
          key={index}
        />
        <i className="down arrow icon" ></i>
      </div>)
    }
    return (<div className="ui cards">
      <MusicianCard
        artistOne={artistOne}
        feature={feature}
        artistTwo={artistTwo}
        song={song}
        key={index}
      />
    </div>)
}

export default MusicianGroup;
