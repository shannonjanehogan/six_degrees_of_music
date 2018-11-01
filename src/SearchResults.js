import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Home from './Home';
import MusicianCard from './MusicianCard';
import logo from './logo.svg';

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
  componentDidMount() {
    let musicianCardsData = [];
    this.state.path.forEach(function(connection) {
      try {
        // var z = await Promise.reject(30);
        let artistone;
        let feature = connection.type == "FEATURING" ? "Featuring " : "Featured by ";
        let artisttwo;
        let song;
        musicianCardsData.push({ artistone, feature, artisttwo, song });
      } catch(e) {
        console.log(e); // 30
      }
    });
  }

  render() {
    return (
      <div className="SearchResults">
        <Home/>
        <p className="App-intro"> Found 47 paths with 4 degrees of separation from Taylor Swift to Kanye: </p>
        <div className="ui cards">
          {this.state.musicianCardsData.map(cardData => <MusicianCard artistone={cardData.artistone} feature={cardData.feature} artisttwo={cardData.artisttwo} song={cardData.song}/>)}
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

export default SearchResults;
