import React from 'react'
import { GlobalContext } from './Context'

const Contact = () => {
  const {age} = GlobalContext();
  return (
    <>
    {age}
    </>
  )
}

export default Contact
