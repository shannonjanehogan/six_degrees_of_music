import React from 'react';
import MusicianGroup from './MusicianGroup';
import { connect } from 'react-redux';
import { fetchArtistInfo } from './reducers/artists/actions';

const SearchResults = ({artists}) => {

  const {musicianCardsData} = artists

  return (
        <div className="SearchResults">
          <p className="App-intro"> Found 47 paths with 4 degrees of separation from Taylor Swift to Kanye: </p>
            {musicianCardsData.map((cardData, index) =>
                <MusicianGroup
                  artistone={cardData.artistOne}
                  feature={cardData.feature}
                  artisttwo={cardData.artistTwo}
                  song={cardData.song}
                  key={index}
                  isLastCard={musicianCardsData.length - 1 === index}
                />
            )}
        </div>
  );
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 getArtistInfo: () => dispatch(fetchArtistInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
