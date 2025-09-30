import React from 'react'
import { Bot, User, X } from 'lucide-react';
import { useState } from 'react';

const Chatbot = () => {

    {/*useState para abrir contenedor de chatbot */}
        const [isOpen, setIsOpen] = useState(false);

  return <>
        {/*Boton para abrir contenedor de chat */}
        <div className='justify-end flex fixed right-6 bottom-6 lg:right-16 lg:bottom-16'>
            <button onClick={() => setIsOpen(!isOpen)} className='bg-[#21441E] p-4 rounded-full flex items-center hover:bg-[#378530] hover:translate-y-[-4px] transition-all'><Bot color='white' size={60}/></button>
        </div>


{isOpen &&(
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div className='bg-[#f6ffff] rounded-lg shadow-xl lg:max-w-[700px] lg:w-full absolute'>

                {/*HEADER DE COMPONENTE CHATBOT*/}
                <div className='bg-[#21441E] text-white flex items-center gap-4 p-4 rounded-t-lg justify-between'>
                    <Bot color='white' size={40}/>
                    <p className='text-4xl font-medium'>Chatbot</p>

                    {/*Boton de cerrar*/}
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <X size={40}/>
                    </button>
                </div>
                    
                        {/*MENSAJE DEL BOT */}
                    <div className='gap-2 flex items-center p-4'>
                        <div className='bg-[#21441E] p-3 rounded-full'>
                            <Bot color='white' size={40}/>
                        </div>

                        <div className=''>
                            <span className='bg-[#21441E] flex p-5 text-white font-medium text-lg rounded-lg mt-2'>
                                MENSAJE DEL BOT
                            </span>
                        </div>
                    </div>

                        {/*MENSAJE DEL USUARIO*/}
                    <div className='gap-2 flex items-center justify-end p-4'>
                        <div className=''>
                            <span className='bg-[#bbb2a1] text-white p-5 flex font-medium text-lg rounded-lg'>
                                MENSAJE DEL USUARIO
                            </span>
                        </div>
                        
                        <div className='bg-[#bbb2a1] p-3 rounded-full'>
                            <User color='white' size={40}/>
                        </div>
                    </div>

                    {/*Contenedor de preguntas*/}
                    <div className=' flex justify-center items-center gap-2 flex-col m-4 py-2'>
                            {/*Preguntas*/}
                        <button className='bg-[#acdac6] w-full mt-4 rounded-md text-[#21441E] p-4 hover:bg-[#5b9c60] active:translate-y-[4px] transition-all shadow-lg'>
                            <span className='text-lg p-2 font-semibold'>
                                Pregunta 1
                            </span>
                        </button>
                    </div>
                   
            </div>
        </div>
       )}
  </>
}

export default Chatbot