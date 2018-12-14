import { push } from 'react-router-redux';
import ArtistsApi from '../api/artists';

export const fetchPathsSuccess = (paths) => dispatch => {
 dispatch({
  type: 'FETCH_PATHS_SUCCESS',
  payload: paths
 })
}

export const fetchPaths = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await ArtistsApi.findPath(1, 2)
      const responseJson = await response.json()
      // need to get the push working
      dispatch(push('/search-results'))
      dispatch(fetchPathsSuccess(responseJson))
    } catch (error) {
      console.log('An error occurred.', error)
    }
  };
}
