import { createSlice } from '@reduxjs/toolkit'

export type DateTypes = {
  month: number
}

export const dateInitialState: DateTypes = {
  month: 1200
}

const DateModule = createSlice({
  name: 'date',
  initialState: dateInitialState,
  reducers: {
    incrementMonth: (state): DateTypes => {
      return { month: state.month + 1 }
    },
    decrementMonth: (state): DateTypes => {
      return { month: state.month - 1 }
    },
    incrementYear: (state): DateTypes => {
      return { month: state.month + 12 }
    },
    decrementYear: (state): DateTypes => {
      return { month: state.month - 12 }
    }
  }
})

// Reducerをエクスポートする
export default DateModule.reducer

// Action Creatorsをエクスポートする
export const { incrementMonth, decrementMonth, incrementYear, decrementYear } = DateModule.actions
