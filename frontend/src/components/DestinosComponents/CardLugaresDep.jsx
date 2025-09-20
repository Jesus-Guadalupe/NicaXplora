import React from 'react'

const CardLugaresDep = () => {
  return (
    <div className='bg-[#ebebeb] shadow-lg p-4 rounded-md'>
        <img src="/Granada.jpg" alt="" className='object-cover w-[300px] h-[150px]'/>
        <div className='p-2'>
            <h1 className='text-2xl font-medium pb-4'>{/*Nombre del lugar */}</h1>
        </div>
    </div>
  )
}

export default CardLugaresDep