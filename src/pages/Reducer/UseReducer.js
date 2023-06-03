import React, { useReducer } from 'react'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state > 0 ? state - 1 : 0
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const handleReset = () => {
        dispatch({ type: 'RESET' })
    }

    console.log(state)

    const location = useLocation()
    const navigate = useNavigate()

    return (

        <>
            <div className="bg-light p-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h3 className='mb-3'>useReducer Hook (My Location is {location.pathname.replace('/', '')})</h3>
                            <h6 className='p-3'>{state}</h6>
                            <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                            <button className='btn btn-info mx-1' onClick={handleDecrement}>Decrement</button>
                            <button className='btn btn-danger' onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3 text-end">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-info' onClick={()=>{navigate(-1)}}>Go Back</button>
                        <button className='btn btn-info ms-2' onClick={()=>{navigate('/')}}>Go Home</button>
                    </div>
                </div>
            </div>
        </>

    )
}
