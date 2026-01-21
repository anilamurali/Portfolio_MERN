import {  motion } from 'framer-motion'
import React from 'react'

function Contact({ lightMode ,textColor }) {
  
  return (
    <>
      <div name='contact'  className='w-full   flex items-center pb-5 pt-5  ps-5' style={!lightMode ? { background: textColor.dark_color } : { background: textColor.light_color }}>
        <div className='flex-col w-full md:flex   md:px-3 px-5 gap-6 mx-auto  container   ' >
          <div className="  text-center   pb-4" >
            <motion.h3 initial={{ y: '-100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} className='underline decoration-solid decoration-orange-600 underline-offset-8'
              style={!lightMode ? { color: textColor.dark_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' } : { color: textColor.light_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }}>Contact Me</motion.h3>
          </div>
          <div className={`flex flex-col p-6 mx-auto  items-center rounded-md border-2 border-e-violet-500 border-l-violet-500 border-indigo-600`}>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=anilamurali3033@gmail.com' className={`m-4 hover:text-orange-600 hover:scale-110  transition-transform duration-300 font-serif text-lg   ${!lightMode ? 'text-blue-50':'text-gray-600'}`}>
            <i className={`fa-solid fa-envelope text-blue-50text-lg ${!lightMode? 'text-blue-50':'text-gray-600'}`}></i>  anilamurali3033@gmail.com</a>

          </div>

        </div>
      </div>

    </>
  )
}

export default Contact