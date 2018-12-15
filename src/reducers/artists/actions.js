import ArtistsApi from '../../api/artists';

export const fetchArtistInfoSuccess = (artistInfo) => dispatch => {
 dispatch({
  type: 'FETCH_ARTIST_INFO_SUCCESS',
  payload: artistInfo
 })
}

export const fetchArtistInfo = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await ArtistsApi.fetchArtistInfo(1)
      const responseJson = await response.json()
      dispatch(fetchArtistInfoSuccess(responseJson))
    } catch (error) {
      console.log('An error occurred.', error)
    }
  };
}

// Eminem -> (Eminem featuring KL) -> Kendrick Lamar ->
// Kendrick Lamar -> (KL featuring U2) -> U2 ->
// U2 -> (U2 featuring ABBA) -> ABBA
// Use artist id to make an api call to fetch the full artist name
// and parse api fields to readable english for display
// export const loadMusicianCard = (connection) => {
//   return async (connection, getState) => {
//     const {paths:{path}, artists:{musicianCardsData}} = getState()
//     console.log('connection', connection)
//     try {
//       // let song = await "Hey yall";
//       // return { artistone, feature, artisttwo, song };
//     } catch(e) {
//       console.log(e);
//     }
//   };
// }

// This function uses the api data to build an array of
// musician data into a usable format for displaying
export const assembleMusicianCardsData = (dispatch) => {
  return async (dispatch, getState) => {
    const {paths:{path}, artists:{musicianCardsData}} = getState()
    try {
      for (const connection of path) {
        const artistOne = connection.start.name
        const feature = connection.type === "FEATURING" ? "Featuring " : "Featured by "
        const artistTwo = connection.end.name

        // will add song when api is working
        // for now will hardcode s
        // const song = await loadMusicianCard(connection.id)
        const song = "hey y'all"

        musicianCardsData.push({artistOne, feature, artistTwo, song})
      }
      dispatch({
       type: 'FETCH_PATHS_SUCCESS',
       payload: { musicianCardsData }
      })

    } catch (error) {
      console.log('An error occurred.', error)
    }
  };
}
