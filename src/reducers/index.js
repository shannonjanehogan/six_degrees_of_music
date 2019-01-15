import {combineReducers} from 'redux'
import paths from './paths'
import artists from './artists'

const rootReducer = combineReducers({
  paths,
  artists
})

export default rootReducer
