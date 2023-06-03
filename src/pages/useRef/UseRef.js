import React, { useEffect, useRef } from 'react'
import notificaion from '../../assets/audios/music.mp3'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function UseRef() {

  const notificaionPlayer = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      notificaionPlayer.current.play()
    }, 1000);
  })

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <div className="p-5">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h3>UseRef Hook (My Location is {location.pathname.replace('/', '')})</h3>
              <audio ref={notificaionPlayer} src={notificaion}></audio>
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
