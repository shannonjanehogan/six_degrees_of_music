import { push } from 'react-router-redux';
// import ArtistsApi from '../api/artists';

export const fetchPathsSuccess = (paths) => dispatch => {
 dispatch({
  type: 'FETCH_PATHS_SUCCESS',
  payload: paths
 })
}

export const fetchPaths = (dispatch) => {
  return async (dispatch) => {
    let url = new URL("http://104.248.220.9/path")

    const fetchParams = {
      method: 'GET',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }
    }

    const artistIds = { artist_id_one: 38661, artist_id_two: 69866 }
    Object.keys(artistIds).forEach(key => url.searchParams.append(key, artistIds[key]))

    try {
      const response = await fetch(url, fetchParams)
      const responseJson = await response.json()

      // need to get the push working
      dispatch(push('/search-results'))
      
      dispatch(fetchPathsSuccess(responseJson))
    } catch (error) {
      console.log('An error occurred.', error)
    }

    // what is this?

    // ArtistsApi
    //   .findPath(1, 2)
    //   .then((jsonResponse) => {
    //     return jsonResponse.json();
    //   }).then((response) => {
    //     console.log(response)
    //     dispatch(push('/search-results'));
    //     dispatch(fetchPathsSuccess(response));
    //   }).catch((error) => {
    //     // TODO
    //   });
  };
}
