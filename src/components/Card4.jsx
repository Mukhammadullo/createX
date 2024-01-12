import React from 'react'

function Card4({ img, h1, p }) {
    return (
        <>
            <div className='w-[285px] flex flex-col items-center gap-[10px]'>
                <img src={img} alt="" />
                <div className='text-center'>
                    <h1 className='font-[700] text-[20px]'>{h1}</h1>
                    <p className='text-[#787A80]'>{p}</p>
                </div>
            </div>
        </>
    )
}

export default Card4
