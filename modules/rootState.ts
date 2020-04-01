import { combineReducers } from '@reduxjs/toolkit'
import sampleModule, { SampleState } from './dateModule'

export interface RootState {
  sample: SampleState
}

export const rootReducer = combineReducers({
  sample: sampleModule.reducer
})
