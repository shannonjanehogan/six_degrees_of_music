import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import pathReducer from './reducers/PathReducer';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    // pathReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )

  return store
}

export default configureStore;
