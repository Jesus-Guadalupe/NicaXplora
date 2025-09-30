import React from 'react'
import { useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const Comentarios = () => {
  const [isLike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  return <>
  <div>
        <h1 className='text-[#21441E] text-4xl font-bold mb'>Comentarios</h1>

        <div className='h-[200px] overflow-y-hidden gap-2'>
          <div className='bg-slate-200'>
                    <div className='flex justify-between relative'>

                      <div>
                        <h2 className='text-lg font-semibold'>Nombre de Usuario</h2>
                        <p>contenido de el comentario</p>
                      </div>

                      <button onClick={() => setIsOpen(!isOpen)}>
                        <HiDotsHorizontal size={25} color='#21441E'/>
                      </button>

                      {isOpen &&(

                      <div className='absolute top-0 right-9'>
                        <button className='text-[#e66259] bg-slate-100 p-2'>Eliminar</button>
                      </div>

                      )}
                      {/*Boton Eliminar */}

                    </div>

                        <div className='font-thin flex gap-2 items-center'>
                          fecha de publicación
                          <button onClick={() => setIsLike(!isLike)}>
                            {isLike? (<AiFillLike size={20} color='#21441E'/>) : (<AiOutlineLike size={20} color='#21441E'/>)}
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