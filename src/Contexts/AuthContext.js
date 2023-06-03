import React, { createContext, useEffect, useReducer } from 'react'

export const AuthContext = createContext()

const initialState = { isAuthonticated: false, user: {} }

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { isAuthonticated: true, user: action.payload.user }
        case 'LOGOUT':
            return { isAuthonticated: false, user: {} }
        default:
            return state
    }
}

export default function AuthContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'LOGIN', payload: { user: { Name: 'Abdul Manan' } } })
        }, 1000);
    })

    // console.log(state.user.Name)

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

// export const useAuthContext = () => {
//     return useContext(AuthContext)
// }
