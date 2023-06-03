// createContext

import React, { useState, createContext, useContext } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {

  const [myName, setMyName] = useState('Abdul Manan!')

  return (
    <UserContext.Provider value={{ myName, setMyName }}>
      {props.children}
    </UserContext.Provider>
  )
}

// Custom Hook
export const useUserContext = () => {
  return useContext(UserContext)
}

