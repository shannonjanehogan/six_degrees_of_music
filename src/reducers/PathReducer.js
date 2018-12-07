export default (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_PATHS_SUCCESS':
   return {
    result: action.payload
  }
  default:
   return state
 }
}
