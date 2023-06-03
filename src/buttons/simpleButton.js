import React from 'react'

export const SimpleButton = (props) => {
  const { bg, icon, text } = props
  // console.log(props.icon)

  const addUser = (e) => {
    e.preventDefault()
    alert("Button is Working")
  }

  return (
    <div>
      {/* <button onClick={addUser} className={`btn btn-${bg}`}><i className={`${icon} me-2`}></i> {text}</button> */}
      <button onClick={(e) => {addUser(e)}} className={`btn btn-${bg}`}><i className={`${icon} me-2`}></i> {text}</button>
    </div>
  )
}
