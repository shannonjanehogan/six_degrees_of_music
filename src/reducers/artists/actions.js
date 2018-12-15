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
