import React from 'react'
import styled from '@emotion/styled'

type PropTypes = {
  day: number
}

export const Date = (props: PropTypes) => {
  return (
    <Main>
      <p>月{props.day}日</p>
    </Main>
  )
}

const Main = styled.div`
  width: calc(100vw / 7);
  height: calc(100vh / 3);
  border: 2px solid #333;
`
