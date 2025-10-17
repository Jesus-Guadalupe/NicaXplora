import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_1v50nbp', 'template_k7p5dwr', form.current, {
            publicKey: 'iyU4mkkQ8nQrhSUd3',
        })
        .then(  
            () => {
            console.log('Mensaje enviado correctamente!');
            },
            (error) => {
            console.log('Hubo un error, favor intenta nuevamente', error.text);
            },
        );
    };

    
    return (
    <div className='bg-gradient-to-t from-[#346430] to-40% to-[#111111] h-auto py-12 flex justify-evenly items-center lg:flex-row md:flex-row flex-col'>

        {/*======primer section de footer====== */}
        <div>

            {/*Espacio para texto*/}
            <div className=''>
                <h1 className='text-white font-light text-2xl mb-1 text-center'>¿Tienes alguna duda o sugerencia para la app?</h1>
                <p className='text-white text-left font-bold text-2xl'>Contactanos!</p>
            </div>

            {/*Espacio para los inputs de email*/}
            <form ref={form} onSubmit={sendEmail}>
            <div className='mt-4'>
                {/*INPUT NOMBRE */}
                <h1 className='font-semibold my-4'>Nombre</h1>
                <input type="text" name='user_name' placeholder='Nombre' className='p-2 w-full text-black rounded'/>

                {/*INPUT EMAIl */}
                <h1 className='font-semibold my-4'>Email</h1>
                <input type="email" name="user_email    " placeholder='email' className='p-2 w-full text-black rounded'/>

                {/*INPUT CONTENIDO */}
                <h1 className='font-semibold my-4'>Mensaje</h1>
                <textarea placeholder="Ingresa tu comentario..." name="message" className='p-2 w-full text-black rounded h-[5rem] text-left'/>
                <input type="submit" value="send"/>
            </div>

            <button className='bg-white text-black mt-8 w-full rounded-sm py-2 flex items-center justify-center gap-2 active:translate-y-[4px] hover:cursor-pointer transition-all'>
                Enviar <IoSend />
            </button>
            </form>
        </div>
        

        {/*======segundo section de footer====== */}
        <div className='mt-12'>
            {/*Texto Footer*/}
            <div className='text-white flex flex-col items-center'>
                <h1 
                className='font-bold text-xl mb-2'>
                    App creada por equipo creativo NicaXplora
                </h1>
                <p>Siguenos en nuestras redes!</p>

            {/*Iconos redes sociales*/}
                <div className='flex flex-row text-white gap-6 ml-4 mt-4 text-3xl p-4'>
                    <a href="https://www.instagram.com/nicaxplora/?igsh=MTl3ZTl6NDZlZnQweg%3D%3D#" target="_blank" 
                    className='flex items-center hover:cursor-pointer hover:translate-y-[-4px] transition-all gap-1'>
                        <RiInstagramFill className='' />
                        <p className='text-[1.2rem]'>@nicaxplora</p>
                    </a>

                    <a href="https://www.facebook.com/share/1APB7nv5aP/" target='_blank' 
                    className='flex items-center hover:cursor-pointer hover:translate-y-[-4px] transition-all gap-1'>
                    <FaFacebook className=''/>
                    <p className='text-[1.2rem]'>@NicaXplora</p>
                    </a>
                    
                    <a href="https://www.tiktok.com/@nicaxplora0?_t=ZM-90YQz5qZohH&_r=1" target='_blank' className='flex items-center hover:cursor-pointer hover:translate-y-[-4px] transition-all gap-1'>
                    <FaTiktok className=''/>
                    <p className='text-[1.2rem]'>@NicaXplora</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer