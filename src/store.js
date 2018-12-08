import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

//to remove?
// import initialState from './reducers/InitialState';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  )

  return store
}

export default configureStore;
