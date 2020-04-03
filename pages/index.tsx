import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import Head from 'next/head'

import { stateTypes } from '../stores/root'
import { nextMonth, prevMonth } from '../stores/date'

const Index = () => {
  const dispatch = useDispatch()

  const date = useSelector((state: stateTypes) => state.date)

  const year = Math.floor((date.month / 12) + 1900)
  const month = (date.month % 12) + 1

  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  type day = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  const checkDate = (checkYear: number, checkMonth: number, checkDay: number): day => {
    const result: day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(`${checkMonth} ${checkDay}, ${checkYear} 00:00:00`)) as day
    return result
  }

  interface calendarObj {
    month: number,
    day: number
  }

  const calendarArray: calendarObj[] = []

  const firstDate = checkDate(year, month, 1)
  if (firstDate !== 'Sunday') {
    const decrementMonth = () => {
      if (month === 1) {
        return 12
      } else {
        return month - 1
      }
    }
    let firstDaysLoop = 0
    if (firstDate === 'Monday') firstDaysLoop = 0
    if (firstDate === 'Tuesday') firstDaysLoop = 1
    if (firstDate === 'Wednesday') firstDaysLoop = 2
    if (firstDate === 'Thursday') firstDaysLoop = 3
    if (firstDate === 'Friday') firstDaysLoop = 4
    if (firstDate === 'Saturday') firstDaysLoop = 5
    for (let i = firstDaysLoop; i >= 0; i -= 1) {
      calendarArray.push({
        month: decrementMonth(),
        day: monthDays[decrementMonth() - 1] - i
      })
    }
  }
  for (let i = 1; i <= monthDays[month - 1]; i++) {
    calendarArray.push({
      month: month,
      day: i
    })
  }
  if (calendarArray.length <= 42) {
    const incrementMonth = () => {
      if (month === 12) {
        return 1
      } else {
        return month + 1
      }
    }
    for (let i = 1; calendarArray.length < 42; i++) {
      calendarArray.push({
        month: incrementMonth(),
        day: i
      })
    }
  }

  const CalendarGrid = styled.div`
    display: grid;
    grid-template-rows: calc(100% / 6) calc(100% / 6) calc(100% / 6) calc(100% / 6) calc(100% / 6) calc(100% / 6);
    grid-template-columns: calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7);
  `

  const CalendarGridItem = styled.div`
    height: calc(calc(100vh - 1.4vw) / 6);
    width: calc(100% / 7);
  `

  const calendar = calendarArray.map((out, index) =>
    <CalendarGridItem key={index}>
      <p>{out.day}</p>
    </CalendarGridItem>
  )

  return (
    <div className='h-screen'>
      <Head>
        <title>Learn React</title>
      </Head>
      <header>
        {year}年{month}月
        <button onClick={() => dispatch(prevMonth())}>{'<'}</button>
        <button onClick={() => dispatch(nextMonth())}>{'>'}</button>
      </header>
      <CalendarGrid>
        {calendar}
      </CalendarGrid>
    </div>
  )
}

export default Index
