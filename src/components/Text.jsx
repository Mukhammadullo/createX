import React from 'react'

function Text({h1,p}) {
  return (
    <div>
      <div className='flex items-center gap-[10px]'>
        <h1 className='text-[46px] font-[700]'>{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default Text
