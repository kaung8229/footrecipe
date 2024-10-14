import React from 'react'

function Banner() {
    return (
        <div className='bg-orange-100 text-2xl md:text-4xl font-medium rounded-lg shadow flex justify-center items-center gap-1 p-5'>
            <h1 className='text-slate-800'>Food</h1>
            <span className='text-red-500 text-lg md:text-xl font-bold'>&</span>
            <h1 className='text-slate-800'>Recipe</h1>
        </div>
    )
}

export default Banner