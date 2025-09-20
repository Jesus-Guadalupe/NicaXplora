import React from 'react'
import { FaHeart, FaList } from "react-icons/fa";
import { TbMapCheck } from "react-icons/tb";

const DashFavorites = () => {
  return (
    <div className='w-full flex flex-row gap-4 justify-center'>

          <div className='bg-slate-200 shadow-xl flex flex-col p-[2rem] lg:w-1/4 md:w-1/3 rounded-md items-center'>
            <div className='flex lg:flex-row items-center'>

              <FaHeart color='#346430' className='size-[3rem]'/>

              <h1 className='text-4xl text-[#346430] ml-4 font-medium'>
                0
              </h1>
            </div>

              <div className='font-light'>
                <p>Destinos favoritos</p>
              </div>

          </div>

          <div className='bg-slate-200 shadow-xl flex flex-col p-[2rem] lg:w-1/4 md:w-1/3 rounded-md items-center'>
            <div className='flex flex-row items-center'>

              <TbMapCheck color='#346430' className='size-[3rem]'/>

              <h1 className='text-4xl text-[#346430] ml-4 font-medium'>
                0
              </h1>
            </div>

              <div className='font-light'>
                <p>Destinos favoritos</p>
              </div>
              
          </div>

          <div className='bg-slate-200 shadow-xl flex flex-col p-[2rem] lg:w-1/4 md:w-1/3 rounded-md items-center'>
            <div className='flex flex-row items-center'>

              <FaList color='#346430' className='size-[3rem]' />

              <h1 className='text-4xl text-[#346430] ml-4 font-medium'>
                0
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