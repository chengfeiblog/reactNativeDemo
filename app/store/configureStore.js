/**
 * 
 */
'use strict';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
/**
 * reducers
 */
import auth from '../reducers/auth';
/**
 * 组合reducers
 */
const reducer = combineReducers(
  {
    auth
  }
);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    return  createStoreWithMiddleware(reducer,initialState);
}