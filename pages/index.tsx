import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import Head from 'next/head'

import { stateTypes } from '../stores/root'
import { incrementMonth, decrementMonth } from '../stores/date'

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

  const calenderArray:calendarObj[] = []

  const firstDate = checkDate(year, month, 1)
  if (firstDate !== 'Sunday') {
    calenderArray.push({
      month: month - 1,
      day: monthDays[month - 2] - 5
    })
    if (firstDate !== 'Monday') {
      calenderArray.push({
        month: month - 1,
        day: monthDays[month - 2] - 4
      })
      if (firstDate !== 'Tuesday') {
        calenderArray.push({
          month: month - 1,
          day: monthDays[month - 2] - 3
        })
        if (firstDate !== 'Wednesday') {
          calenderArray.push({
            month: month - 1,
            day: monthDays[month - 2] - 2
          })
          if (firstDate !== 'Thursday') {
            calenderArray.push({
              month: month - 1,
              day: monthDays[month - 2] - 1
            })
            if (firstDate !== 'Friday') {
              calenderArray.push({
                month: month - 1,
                day: monthDays[month - 2]
              })
            }
          }
        }
      }
    }
  }
  for (let i = 1; i <= monthDays[month - 1]; i++) {
    calenderArray.push({
      month: month,
      day: i
    })
  }
  const lastDate = checkDate(year, month, monthDays[month - 1])
  if (lastDate !== 'Saturday') {
    calenderArray.push({
      month: month - 1,
      day: 1
    })
    if (lastDate !== 'Friday') {
      calenderArray.push({
        month: month - 1,
        day: 2
      })
      if (lastDate !== 'Thursday') {
        calenderArray.push({
          month: month - 1,
          day: 3
        })
        if (lastDate !== 'Wednesday') {
          calenderArray.push({
            month: month - 1,
            day: 4
          })
          if (lastDate !== 'Tuesday') {
            calenderArray.push({
              month: month - 1,
              day: 5
            })
            if (lastDate !== 'Monday') {
              calenderArray.push({
                month: month - 1,
                day: 6
              })
            }
          }
        }
      }
    }
  }

  const CalendarGrid = styled.div`
  `

  const calendar = calenderArray.map((out, index) =>
    <div key={index}>
      <p>{out.day}</p>
    </div>
  )

  return (
    <div className='h-screen'>
      <Head>
        <title>Learn React</title>
      </Head>
      {year}年{month}月
      <button onClick={() => dispatch(decrementMonth())}>{'<'}</button>
      <button onClick={() => dispatch(incrementMonth())}>{'>'}</button>
      <br />
      <CalendarGrid>
        {calendar}
      </CalendarGrid>
    </div>
  )
}

export default Index
