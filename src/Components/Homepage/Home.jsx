import React from 'react'
import '../Homepage/Home.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
function Home({ lightMode,textColor }) {


  return (
    <>
      <div className='w-full h-screen  ' style={!lightMode ? { background: textColor.dark_color } : { background: textColor.light_color }}>
        
        <div className="max-w-[1000px] flex px-4 pt-4 mx-auto gap-0 flex-col  h-full w-full " >
          <motion.h5 initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '100px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }}>Hi , I am</motion.h5>
          <motion.h1 initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '100px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} style={!lightMode ? { fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '60px', fontWeight: 'bold', color: textColor.dark_text } :
            { fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '60px', fontWeight: 'bold', color: textColor.light_text }}>ANILA MURALI</motion.h1>
          <motion.h3 initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '100px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} style={{ color: textColor.text_color, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }}>MERN Stack Developer</motion.h3>
          <motion.p style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }} initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '100px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }}> MEARN Stack Web developer with a strong foundation in front-end and
            back-end technologies.Passionate in creating web applications that are both user-friendly and responsive.</motion.p>
          <motion.div initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '100px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} className="social">
            <motion.a style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }} href="https://www.linkedin.com/in/anila-murali-388942177/"><i class="fa-brands fa-linkedin"></i></motion.a>
            <motion.a style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }} href="https://github.com/anilamurali"><i class="fa-brands fa-github"></i></motion.a>
            <motion.a style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }} href=""> <i class="fa-solid fa-envelope"></i></motion.a>
          </motion.div>
          <motion.div className='mt-3' initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '100px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }}>
         <motion.button whileHover={{ scale: 1.1, backgroundColor: textColor.text_color, color: textColor.dark_text }} style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }} whileTap={{ scale: .9 }}
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=anilamurali3033@gmail.com",
              "_blank"
            )
          } >Contact Me</motion.button>
          </motion.div>
        </div>

      </div>



    </>
  )
}

export default Home