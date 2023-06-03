import React, { useState, useEffect, useContext } from 'react'
import { CountContext } from '../../Contexts/CountContext'
import { UserContext } from '../../Contexts/UserContext'

import { users } from '../../data/users'

// import CommonPage from '../CommonPage'

const statuses = ['All', 'Active', 'Pending', 'Inactive']

export default function Hero() {

    const [color, setColor] = useState("info")

    const [documents, setDocuments] = useState([])
    const [status, setStatus] = useState('active')
    const [limit, setLimit] = useState(5)

    const { count } = useContext(CountContext)
    const { myName } = useContext(UserContext)


    useEffect(() => {

        if (status !== 'All') {
            let filterDocument = users.filter((user) => {
                return user.status === status
            })
            setDocuments(filterDocument)
        }
        else {
            setDocuments(users.slice(0, limit))
        }

    }, [status, limit])


    return (
        <>
            <h3 className='text-center text-danger fw-bold mt-4'>useState & useEffect Hook</h3>
            <div className='text-center py-3'>
                <h4 className='pb-2'>My Favorite button color is {color}</h4>
                <button className='btn bg-secondary text-white me-2' type='button' onClick={() => { setColor('danger') }}>Danger</button>
                <button className='btn bg-secondary text-white me-2' type='button' onClick={() => { setColor('info') }}>Info</button>
                <button className='btn bg-secondary text-white me-2' type='button' onClick={() => { setColor('success') }}>Success</button>
                <button className='btn bg-secondary text-white me-2' type='button' onClick={() => { setColor('primary') }}>Primary</button>
                <button className='btn bg-secondary text-white me-2' type='button' onClick={() => { setColor('warning') }}>Warning</button>
                <br /><br />
                <button className={`btn btn-${color}`}>I'm a Button</button>
            </div>

            {/* .................................................................................................................. */}

            <div className={`pt-3 bg-${color}`}>
                <div className="container">
                    <div className="row text-center">

                        <h5 className='p-5'>{myName}</h5>
                        <h4>Users with status {status} ({count})</h4>

                        <div className="col">
                            <select className='w-50 form-control mx-auto' onChange={(e) => { setStatus(e.target.value) }}>
                                {statuses.map((status, i) => {
                                    return <option key={i} value={status}>{status}</option>
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <input type="text" className='w-50 form-control mx-auto' placeholder='Enter your number (1-10)' onChange={(e) => { setLimit(e.target.value) }} />
                        </div>

                        <ol className='pt-2'>
                            {documents.map((user, i) => {
                                return <li key={i}>Name: <b>{user.name}</b> and status is <b>{user.status}</b></li>
                            })}
                        </ol>

                    </div>
                </div>
            </div>

            {/* <CommonPage text="This is Hero Section Page" /> */}
        </>

    )
}
