import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
// import Buttons from './MidData/Buttons'
// import Map from './MidData/Map'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import NoPage from './NoPage'
import About from './About'
import UseReducer from './Reducer'
import UseRef from './useRef'
import UseMemo from './useMemo'

export default function Index() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/usememo' element={<UseMemo />} />
                    <Route path='/useref' element={<UseRef />} />
                    <Route path='/usereducer' element={<UseReducer />} />
                    
                    {/* <Route path='/button' element={<Buttons />} />
                    <Route path='/map' element={<Map />} /> */}

                    <Route path='*' element={<NoPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>

    )
}
