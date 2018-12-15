import ArtistsApi from '../../api/artists';
import {assembleMusicianCardsData} from '../artists/actions'

export const fetchPathsError = () => dispatch => {
 dispatch({
  type: 'FETCH_PATHS_ERROR',
 })
}

export const fetchPaths = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await ArtistsApi.findPath(1, 2)
      const path = await response.json()

      dispatch({
       type: 'FETCH_PATHS_SUCCESS',
       payload: {path}
      })
      dispatch(assembleMusicianCardsData())
    } catch (error) {
      dispatch(fetchPathsError())
    }
  };
}
