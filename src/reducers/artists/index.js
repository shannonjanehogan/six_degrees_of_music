export const initialState = {
  artistInfo: {},
  musicianCardsData: []
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'FETCH_ARTIST_INFO_SUCCESS':
   return {
    artistInfo: action.payload
  }
  default:
   return state
 }
}
