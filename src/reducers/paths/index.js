export const initialState = {
  path: [],
  pathSuccess: false
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'FETCH_PATHS_SUCCESS':
   return {
    path: action.payload.path,
    pathSuccess: true
  }
  case 'FETCH_PATHS_ERROR':
   return {
    pathSuccess: false
  }
  default:
   return state
 }
}
