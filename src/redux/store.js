import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { items, loading, filter, error } from './contacts-reducer';
const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
