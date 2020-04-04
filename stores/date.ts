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
    nextMonth: (state): DateTypes => {
      return { month: state.month + 1 }
    },
    prevMonth: (state): DateTypes => {
      return { month: state.month - 1 }
    },
    nextYear: (state): DateTypes => {
      return { month: state.month + 12 }
    },
    prevYear: (state): DateTypes => {
      return { month: state.month - 12 }
    }
  }
})

export default DateModule.reducer

export const { nextMonth, prevMonth, nextYear, prevYear } = DateModule.actions
