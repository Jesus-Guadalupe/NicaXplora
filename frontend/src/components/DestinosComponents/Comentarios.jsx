import React from 'react'

import { AiOutlineLike } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const Comentarios = () => {
  return <>
  <div>
        <h1 className='text-[#21441E] text-4xl font-bold mb'>Comentarios</h1>

        <div className='h-[200px] overflow-y-hidden gap-2'>
          <div className='bg-slate-200'>
                    <div className='flex justify-between'>

                      <div>
                        <h2 className='text-lg font-semibold'>Nombre de Usuario</h2>
                        <p>contenido de el comentario</p>
                      </div>

                      <button>
                        <HiDotsHorizontal size={25}/>
                      </button>

                    </div>

                        <div className='font-thin flex gap-2 items-center'>
                          fecha de publicación
                          <button>
                            <AiOutlineLike size={20}/>
                          </button>
                        </div>
            </div>
        </div>
        

        <div className='w-full'>
          <input type="text"  className='p-4'/>
          <button className='bg-[#21441E] p-4 text-white font-medium'>Comentar</button>
        </div>
  </div>
  </>
}

export default Comentarios