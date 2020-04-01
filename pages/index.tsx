import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../modules/rootState'

import { Date } from '../components/Calendar/Date'

const Index = () => {
  const samples = useSelector((state: RootState) => state.sample)
  const [month, setMonth] = useState(1)

  const list = []

  const monthDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (let i = 1; i <= monthDate[month]; i += 1) {
    list.push(<li>{i}</li>)
  }

  return (
    <div className='h-screen'>
      <p>month: {samples.value}</p>
      <button onClick={() => setMonth(month => month + 1)}>+</button>
      <button onClick={() => setMonth(month => month - 1)}>-</button>
      <Date day={month} />
    </div>
  )
}

export default Index
