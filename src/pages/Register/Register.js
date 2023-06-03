import React, { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// import CommonPage from '../CommonPage'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

export default function Register() {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        // alert("useState is Working")
        console.log("useState is working")
    }, [state])

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { firstName, password } = state

        if (firstName.length <= 3) {
            alert("Enter your Name correctly")
            return
        }
        if (password.length < 6) {
            alert("Minimum Length should 6")
            return
        }

        console.log('State =>', state)

    }

    const location = useLocation()
    const navigate = useNavigate()

    return (

        <>
            <div className='py-5 bg-light heights'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <h2 className='text-center mb-4'>Register Form (My Location is {location.pathname.replace('/', '')})</h2>
                            <div className="card bg-light p-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 col-md-6 mb-3">
                                            <input type="text" name='firstName' placeholder='Enter your first Name' className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <input type="text" name='lastName' placeholder='Enter your last Name' className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="text" name='email' placeholder='Enter your email here ...' className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col mb-3">
                                            <input type="password" name='password' placeholder='Enter password here ...' className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col">
                                            <button className='btn btn-success w-50'>Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3 text-end">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-info' onClick={() => { navigate(-1) }}>Go Back</button>
                        <button className='btn btn-info mx-2' onClick={() => { navigate(1) }}>Go Farward</button>
                        <button className='btn btn-info' onClick={() => { navigate('/') }}>Go Home</button>
                    </div>
                </div>
            </div>
        </>

        // <CommonPage text="This is Register Section Page" />
    )
}

