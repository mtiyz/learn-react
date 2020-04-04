import React from 'react'
import styled from '@emotion/styled'

type PropTypes = {
  day: number
}

export const Date = (props: PropTypes) => {
  const Element = styled.div`
    height: calc(calc(100vh - 81px) / 6);
    width: calc(100vw / 7);
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
  `

  return (
    <Element>
      <p>{props.day}日</p>
    </Element>
  )
}

export default Date
