import React from 'react';
import MusicianCard from './MusicianCard';

const MusicianGroup = ({artistone, feature, artisttwo, song, index, isLastCard}) => {
  // TODO rename to ui card and fix resulting css issue
    if (!isLastCard) {
      return (<div className="ui cards">
        <MusicianCard
          artistone={artistone}
          feature={feature}
          artisttwo={artisttwo}
          song={song}
          key={index}
        />
        <i className="down arrow icon" ></i>
      </div>)
    }
    return (<div className="ui cards">
      <MusicianCard
        artistone={artistone}
        feature={feature}
        artisttwo={artisttwo}
        song={song}
        key={index}
      />
    </div>)
}

export default MusicianGroup;
