import React from 'react'
import styled from '@emotion/styled'

const Index = () => {
  return (
    <div className='bg-blue-200 h-screen flex items-center justify-center'>
      <CardForm>
        <Form className='bg-gray-100 shadow-2xl'>
          Form!!!!!!!!!!!
        </Form>
      </CardForm>
    </div>
  )
}

const CardForm = styled.div`
  height: 65vh;
  width: 30vw;
`

const Form = styled.div`
  border-radius: 0.75rem;
`

export default Index
