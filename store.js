import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer, persistStore } from 'redux-persist'

import { movies } from './src/reducers/movies'

const reducer = combineReducers({ movies })

const enhancer = applyMiddleware(thunk);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store =
  process.env.NODE_ENV === "development"
    ? createStore(persistedReducer, composeWithDevTools(enhancer))
    : createStore(persistedReducer, enhancer);

export const persistor = persistStore(store)
