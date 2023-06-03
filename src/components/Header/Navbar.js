import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'

export default function () {

    const { state } = useContext(AuthContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link active" aria-current="page">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className="nav-link active" aria-current="page">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usememo' className="nav-link active" aria-current="page">useMemo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/useref' className="nav-link active" aria-current="page">useRef</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usereducer' className="nav-link active" aria-current="page">useReducer</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/button' className="nav-link active" aria-current="page">Buttons</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/map' className="nav-link active" aria-current="page">Map Method</Link>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" value={state} type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success btn-light" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
