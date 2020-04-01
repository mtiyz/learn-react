import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  EnhancedStore
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import dateReducer, { DateTypes } from './date'

export interface stateTypes {
  date: DateTypes
}

const reducer = combineReducers({
  date: dateReducer
})

export const setupStore = (): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()]

  // only development
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  return configureStore({
    reducer: reducer,
    middleware: middlewares,
    devTools: true
  })
}
