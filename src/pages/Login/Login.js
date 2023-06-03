import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(`Name => ${name}`)
        console.log(`Password => ${password}`)

        if (password.length < 8) {
            alert("Minimum Length should 8")
            return
        }

    }

    const location = useLocation()
    const navigate = useNavigate()

    return (

        <>
            <div className='py-5 bg-light heights'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <h2 className='text-center mb-4'>Login Form (My Location is {location.pathname.replace('/', '')})</h2>
                            <div className="card bg-light p-3">
                                <h5 className='py-1'>Name: {name}</h5>
                                <h5 className='py-1'>Password: {password}</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="row text-center">
                                        <div className="col-12 w-100">
                                            <input type="text" placeholder='Enter your Name here ...' className='form-control' onChange={(e) => { setName(e.target.value) }} />
                                        </div>
                                        <div className="col-12 py-2 w-100">
                                            <input type="password" placeholder='Enter Password here ...' className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                                        </div>
                                        <div className="col pt-2">
                                            <button className='btn btn-success w-25'>Login</button>
                                            <button className='btn btn-success w-25 ms-2'>Logout</button>
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

    )
}
