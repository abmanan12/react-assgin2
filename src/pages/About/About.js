import React, { useContext } from 'react'
import { CountContext } from '../../Contexts/CountContext'
import { UserContext, useUserContext } from '../../Contexts/UserContext'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function About() {

    const { count, handleIncrement, handleDecrement, handleReset } = useContext(CountContext)
    // const {myName, setMyName} = useContext(UserContext)
    const { myName, setMyName } = useUserContext()

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-light p-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h3 className='mb-3 text-danger fw-bold'>useState & useContext Hook (My Location is {location.pathname.replace('/', '')})</h3>
                            <h5>My Name is {myName}</h5>
                            <form className='d-flex justify-content-center py-2' onChange={e => { setMyName(e.target.value) }}>
                                <input className='form-control w-25' type="text" />
                            </form><hr />
                            <h6 className='p-3'>{count}</h6>
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
                        <button className='btn btn-info' onClick={() => { navigate(-1) }}>Go Back</button>
                        <button className='btn btn-info mx-2' onClick={() => { navigate(+1) }}>Go Farward</button>
                        <button className='btn btn-info' onClick={() => { navigate('/') }}>Go Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}
