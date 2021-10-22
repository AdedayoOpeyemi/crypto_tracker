import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import coinsReducer from './coins/coins';

const reducer = combineReducers({
  coins: coinsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
