import ArtistsApi from '../api/artists';

export const fetchPathsSuccess = (paths) => dispatch => {
 dispatch({
  type: 'FETCH_PATHS_SUCCESS',
  payload: { paths }
 })
}

export const fetchPathsError = () => dispatch => {
 dispatch({
  type: 'FETCH_PATHS_ERROR',
 })
}

export const fetchArtistInfoSuccess = (artistInfo) => dispatch => {
 dispatch({
  type: 'FETCH_ARTIST_INFO_SUCCESS',
  payload: artistInfo
 })
}

export const fetchPaths = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await ArtistsApi.findPath(1, 2)
      const responseJson = await response.json()
      dispatch(fetchPathsSuccess(responseJson))
    } catch (error) {
      dispatch(fetchPathsError())
    }
  };
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
