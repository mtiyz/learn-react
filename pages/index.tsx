import React, { useState } from 'react'

import { Date } from '../components/Calendar/Date'

const Index = () => {
  const [month, setMonth] = useState(1)

  const list = []

  const monthDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (let i = 1; i <= monthDate[month]; i += 1) {
    list.push(<li>{i}</li>)
  }

  return (
    <div className='h-screen'>
      <p>month: {month}</p>
      <button onClick={() => setMonth(month => month + 1)}>+</button>
      <button onClick={() => setMonth(month => month - 1)}>-</button>
      <Date day={month} />
    </div>
  )
}

export default Index
