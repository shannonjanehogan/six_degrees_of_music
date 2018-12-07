import { push } from 'react-router-redux';
import ArtistsApi from '../api/artists';

export const fetchPathsSuccess = (paths) => dispatch => {
  console.log("FETCH PATHS SUCESS")
 dispatch({
  type: 'FETCH_PATHS_SUCCESS',
  payload: paths
 })
}

// TODO: Christina
export function fetchPaths(dispatch) {
  console.log("IN FETCH PATHS")
  return dispatch => {
    console.log("HERE")
    let url = new URL("http://104.248.220.9/path"),
    params = { artist_id_one: 38661, artist_id_two: 69866 }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url, {
      method: 'GET',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }
    }).then(
     response => response.json(),
     error => console.log('An error occurred.', error)
   ).then(json =>
     console.log(json),
     dispatch(push('/search-results')),
    //  dispatch(fetchPathsSuccess(json))
   )
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
