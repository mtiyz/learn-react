import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'

import { stateTypes } from '../stores/root'
import { nextMonth, prevMonth } from '../stores/date'

const Header = () => {
  const dispatch = useDispatch()

  const date = useSelector((state: stateTypes) => state.date)

  const nowYear = Math.floor((date.month / 12) + 1900)
  const nowMonth = (date.month % 12) + 1

  const Element = styled.div`
    height: 80px;
  `

  return (
    <Element>
      {nowYear}年{nowMonth}月
      <button onClick={() => dispatch(prevMonth())}>{'<'}</button>
      <button onClick={() => dispatch(nextMonth())}>{'>'}</button>
    </Element>
  )
}

export default Header
