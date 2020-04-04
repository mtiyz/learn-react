import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'

import { stateTypes } from '../stores/root'
import { nextMonth, prevMonth } from '../stores/date'

import Calendar from '../components/Calendar/Calendar'

const Index = () => {
  const dispatch = useDispatch()

  const date = useSelector((state: stateTypes) => state.date)

  const nowYear = Math.floor((date.month / 12) + 1900)
  const nowMonth = (date.month % 12) + 1

  return (
    <div className='h-screen'>
      <Head>
        <title>Learn React</title>
      </Head>
      <header>
        {nowYear}年{nowMonth}月
        <button onClick={() => dispatch(prevMonth())}>{'<'}</button>
        <button onClick={() => dispatch(nextMonth())}>{'>'}</button>
      </header>
      <Calendar />
    </div>
  )
}

export default Index
