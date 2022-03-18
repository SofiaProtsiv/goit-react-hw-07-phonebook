import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './contacts-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
