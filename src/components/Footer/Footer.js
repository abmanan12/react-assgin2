import React from 'react'

export default function () {

    let year = new Date().getFullYear()

  return (
    <>
        <div className="bg-dark">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="p-1 text-white text-center">&copy; {year}. All Rights Reserved</div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
