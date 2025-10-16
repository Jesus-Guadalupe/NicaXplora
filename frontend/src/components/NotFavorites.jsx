import React from 'react'
import { FaHeartBroken } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotFavorites = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[8rem]'>
          <FaHeartBroken color='#3c8b78' className='scale-[8] mb-[4rem]'/>

          <h1 className='font-bold text-2xl'>
            No tienes favoritos aún
          </h1>

          <p className='text-xl font-light mt-2'>
            Explora destinos y agrega los que más te gusten a tus favoritos
          </p>

          <Link to={"/destinos"}>
            <button className='bg-[#3c8b78] py-4 px-[3rem] rounded-lg text-white font-bold mt-6 hover:bg-[#1c4e42] hover:shadow-lg'>
              Explora Destinos
            </button>
          </Link>
      </div>
  )
}

export default NotFavorites