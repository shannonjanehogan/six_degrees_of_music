import ArtistsApi from '../../api/artists';

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
