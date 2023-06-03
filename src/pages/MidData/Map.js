import React from 'react'

import { countries } from '../../data/countries'

export default function Hero() {

    const fruites = ["Apple", "Mango", "Orange", "Banana"]

    let user = { fName: "Abdul", lName: "Manan", age: 22, gender: "Male" }
    const { fName, lName, age } = user

    let cgpa = 2.99

    return (
        <div className='bg-secondary'>
            <h2 className='text-center py-3'>Map Method (Fruites, Countries, User)</h2>
            <h4 className='text-center py-3'>This is Fruites Section</h4>
            <ul className='uiStyles'>
                {
                    fruites.map((fruite, i) => {
                        return <li key={i}>{i + 1} {fruite}</li>
                    })
                }
            </ul>

            {/* <ul className='uiStyles'>
                    <li>Apple</li>
                    <li>Mango</li>
                    <li>Orange</li>
                    <li>Banana</li>
                </ul> */}


            <p className='text-center text-danger'>Hy My Name is {fName} {lName} and my age is {age}</p>

            <h4 className='text-center py-3'>Ternary Operator</h4>
            <p className='text-center text-dark'>{cgpa > 3 ? 'Excellent' : 'Passed'}</p>
            <p className='text-center text-dark'>{cgpa > 3 && 'Excellent'}</p>

            <h4 className='text-center py-3'>This is our Countries Section</h4>
            <ul className='uiStyles'>
                {
                    countries.map((country, i) => {
                        return <li key={i} className='text-danger'>{i + 1} {country}</li>
                    })
                }
            </ul>
        </div >
    )
}
