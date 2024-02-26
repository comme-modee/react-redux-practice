import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
    let num = useSelector(state => state.num)
  return (
    <button className='count-num-box'>{num}</button>
  )
}

export default Box