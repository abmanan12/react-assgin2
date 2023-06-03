import React from 'react'

export default function Hero(prop) {
    const {text} = prop
    return (
        <div className='bg-secondary heights d-flex align-items-center justify-content-center'>
            <h2 className='text-center py-2'>{text ? text : "Common Pge"}</h2>

        </div>
    )
}
