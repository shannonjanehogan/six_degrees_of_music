import React, { Component } from 'react';
import Home from './Home';
import MusicianCard from './MusicianCard';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { fetchPathsSuccess } from './actions/PathAction';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      musicianCardsData: [],
      path: [{
        "connection":{
          "extras":{
            "forward":true,
            "masterId":"975947"
          },
          "type":"FEATURING"
        },
        "end":{"id":"1778977","name":"Kendrick Lamar"},
        "start":{"id":"38661","name":"Eminem"}},
      {"connection":{
        "extras":{
          "forward":false,
          "masterId":"1272367"
        },
        "type":"FEATURING"},
        "end":{"id":"6520","name":"U2"},
        "start":{"id":"1778977","name":"Kendrick Lamar"}},
      {"connection":
        {"extras":
          {"forward":true,"masterId":"583976"},
          "type":"FEATURING"},
          "end":{"id":"69866","name":"ABBA"},
          "start":{"id":"6520","name":"U2"}}]
    };
  }

  // Eminem -> (Eminem featuring KL) -> Kendrick Lamar ->
  // Kendrick Lamar -> (KL featuring U2) -> U2 ->
  // U2 -> (U2 featuring ABBA) -> ABBA
  // Use artist id to make an api call to fetch the full artist name
  // and parse api fields to readable english for display
  async loadMusicianCard(connection) {
    try {
      let artistone = await this.props.pathAction();
      let feature = connection.type === "FEATURING" ? "Featuring " : "Featured by ";
      let artisttwo;
      let song;
      return { artistone, feature, artisttwo, song };
    } catch(e) {
      console.log(e);
    }
  }

  // This function uses the api data to build an array of
  // musician data into a usable format for displaying
  assembleMusicianCardsData() {
    let musicianCardsData = [];
    this.state.path.forEach((connection) => {
      musicianCardsData.push(this.loadMusicianCard(connection))
    });
  }

  render() {
    const {musicianCardsData} = this.state
    return (
      <div className="SearchResults">
        <Home/>
        <p className="App-intro"> Found 47 paths with 4 degrees of separation from Taylor Swift to Kanye: </p>
        <div className="ui cards">
          {musicianCardsData.map(cardData =>
            <MusicianCard
              artistone={cardData.artistone}
              feature={cardData.feature}
              artisttwo={cardData.artisttwo}
              song={cardData.song}
            />
          )}
          <MusicianCard
            artistone="Taylor Swift"
            feature="Featuring "
            artisttwo="Bryan Adams"
            song="Teardrops on My Guitar, 2004"
          />
          <i className="down arrow icon"></i>
          <MusicianCard
            artistone="Bryan Adams"
            feature="Featured by "
            artisttwo="Tim McGraw"
            song="Fuck High School Betches, 2006"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 fetchPathsSuccess: () => dispatch(fetchPathsSuccess())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
