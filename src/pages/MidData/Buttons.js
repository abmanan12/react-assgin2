import React from 'react'

import { SimpleButton } from '../../buttons/simpleButton'


export default function Hero() {

    return (
        <div className='bg-secondary heights d-flex justify-content-center align-items-center flex-column'>
            <h5 className='text-center py-3 text-dark'>This is our Buttons Section</h5>

            <div className="p-2 text-center"><SimpleButton bg='success' text='Add User' icon='fa-duotone fa-plus' /></div>
            <div className="p-2 text-center"><SimpleButton bg='danger' text='DEL User' icon='fa-solid fa-xmark' /></div>

            <h6 style={{color:'orange', textAlign:'center', padding: 8}}>This is paragraph</h6>

        </div >
    )
}
