import React from 'react'
import Head from 'next/head'

import Calendar from '../components/Calendar/Calendar'
import Header from '../components/Header'

const Index = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>Learn React</title>
      </Head>
      <Header />
      <Calendar />
    </div>
  )
}

export default Index
