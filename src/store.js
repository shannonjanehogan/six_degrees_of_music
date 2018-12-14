import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import pathReducer from './reducers/PathReducer';

//to remove?
// import initialState from './reducers/InitialState';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    // pathReducer,
    initialState,
    compose(applyMiddleware(thunk))
  )

  return store
}

export default configureStore;
