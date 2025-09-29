import React from 'react'

const CardLugaresDep = ( {dest} ) => {
  return (
    <div className='bg-gray-100 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
  <img src={dest.image_url} alt={dest.name} className='w-full h-28 object-cover'/>
  <div className='p-2 text-center'>
    <h1 className='text-sm font-medium truncate'>{dest.name}</h1>
  </div>
</div>

  )
}

export default CardLugaresDep