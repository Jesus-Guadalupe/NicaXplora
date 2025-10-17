import React from 'react'
import { FaHeart, FaList } from "react-icons/fa";
import { TbMapCheck } from "react-icons/tb";

const DashFavorites = ({count}) => {
  return (
    <div className='w-full flex flex-row gap-4 justify-center' >

          <div className='bg-[#1A1A1A] shadow-lg shadow-emerald-500 flex flex-col p-[2rem] md:w-[90vh] lg:w-[50vh] rounded-md items-center justify-center '>
            <div className='flex lg:flex-row items-center mb-2'>

              <FaHeart color='#ffffff' className='size-[3rem]'/>

              <h1 className='text-4xl text-white ml-2 font-medium'>
                {count}
              </h1>
            </div>

              <div className='font-light'>
                <p>Destinos favoritos</p>
              </div>

          </div>

          

          
      </div>
  )
}

export default DashFavorites