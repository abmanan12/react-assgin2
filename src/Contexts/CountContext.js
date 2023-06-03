// createContext

import React, { useState, createContext } from 'react'

export const CountContext = createContext()

export default function CountContextProvider(props) {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(c => c + 1)
  }

  const handleDecrement = () => {
    count > 0 && setCount(c => c - 1)
  }

  const handleReset = () => {
    setCount(0)
  }


  return (

    <CountContext.Provider value={{ count, handleIncrement, handleDecrement, handleReset }}>
      {props.children}
    </CountContext.Provider>

  )
}
