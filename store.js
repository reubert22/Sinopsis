import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import { genres } from './src/reducers/genres'
import { popular } from './src/reducers/popular'

const reducer = combineReducers({ genres, popular })

const enhancer = applyMiddleware(thunk);

const store =
  process.env.NODE_ENV === "development"
    ? createStore(reducer, composeWithDevTools(enhancer))
    : createStore(reducer, enhancer);

export default store