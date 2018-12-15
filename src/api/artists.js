
class ArtistsApi {
  static findPath(artist_id_one, artist_id_two) {
    // The fetch library does not support search params on GET requests, so this
    // is the workaround recommended by the library maintainers:
    // See: https://github.com/github/fetch/issues/256
    let url = new URL("http://104.248.220.9/path"),
    params = { artist_id_one: 38661, artist_id_two: 69866 }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url, {
      method: 'GET',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }
    })
  }
  static fetchArtistInfo(artist_id) {
    let url = new URL(`http://104.248.220.9/artists/${artist_id}`)
    return fetch(url, {
      method: 'GET',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }
    })
  }
}

export default ArtistsApi;
