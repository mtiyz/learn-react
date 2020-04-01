import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { stateTypes } from '../stores/root'
import { incrementMonth, decrementMonth, incrementYear, decrementYear } from '../stores/date'

const Index = () => {
  const dispatch = useDispatch()

  const date = useSelector((state: stateTypes) => state.date)

  return (
    <div className='h-screen'>
      <p>year: {(date.month / 12) + 1900}</p>
      <p>month: {(date.month % 12) + 1}</p>
      <p>Change month:</p>
      <button onClick={() => dispatch(incrementMonth())}>+</button><br />
      <button onClick={() => dispatch(decrementMonth())}>-</button>
      <p>Change year:</p>
      <button onClick={() => dispatch(incrementYear())}>+</button><br />
      <button onClick={() => dispatch(decrementYear())}>-</button>
    </div>
  )
}

export default Index
