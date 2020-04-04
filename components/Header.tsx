import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { stateTypes } from '../stores/root'
import { nextMonth, prevMonth } from '../stores/date'

const Header = () => {
  const dispatch = useDispatch()

  const date = useSelector((state: stateTypes) => state.date)

  const nowYear = Math.floor((date.month / 12) + 1900)
  const nowMonth = (date.month % 12) + 1
  return (
    <header>
      {nowYear}年{nowMonth}月
      <button onClick={() => dispatch(prevMonth())}>{'<'}</button>
      <button onClick={() => dispatch(nextMonth())}>{'>'}</button>
    </header>
  )
}

export default Header
