import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import initialState from './reducers/InitialState';

export default function configureStore(initialState) {
 return createStore(
  rootReducer,
   applyMiddleware(thunk)
 );
}
