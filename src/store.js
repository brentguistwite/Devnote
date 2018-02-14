import {
  createStore,
  applyMiddleware,
  // combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
// import { reducer as formReducer } from 'redux-form';
import reducer from './reducers/reducer';

export default createStore(
  reducer,
  applyMiddleware(thunk),
);
