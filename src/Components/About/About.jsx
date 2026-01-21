import { motion } from 'framer-motion'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../About/About.css'

function About({ lightMode, textColor }) {

  return (
    <>
      <div className='w-full pb-52 ' name='about' style={!lightMode ? { background: textColor.dark_color } : { background: textColor.light_color }}>
        <div className="  text-center  pt-5 pb-4" >
          <motion.h3 className='underline decoration-solid decoration-orange-700 underline-offset-8' initial={{ y: '20px' }} whileInView={{ x: '' }} style={!lightMode ? { color: textColor.dark_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }
            : { color: textColor.light_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }}>About</motion.h3>
        </div>
        <Row className='pb-5'>
          <Col sm={12} md={4} lg={5} xl={5} className='flex justify-center '>
            <motion.img
              initial={{ y: '-200px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }}
              width={'500px'} src='https://www.webstackacademy.com/wp-content/uploads/2023/01/Full-Stock-Hero.png'></motion.img>
          </Col>
          <Col sm={12} md={8} lg={7} xl={7} className='flex justify-start  items-center '>
            <motion.div initial={{ y: '200px', opacity: '0' }} whileInView={{ y: '30px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} className=' justify-center text-justify  ps-3 w-5/6'>
              <p className='text-lg ' style={!lightMode ? { color: textColor.dark_text, fontFamily: 'AR One Sans, sans-serif' } : { color: textColor.light_text, fontFamily: 'AR One Sans, sans-serif' }}>
                Hi Everyone, My name is <span style={{ color: textColor.text_color, fontFamily: 'AR One Sans, sans-serif' }}>Anila Murali</span> I’m an MCA graduate and an aspiring Software Developer with hands-on internship experience in MERN stack and Python Django development. 
                I enjoy building web applications from the ground up, working across both frontend and backend to turn ideas into functional, user-friendly solutions.
              </p>
              <p className='text-lg' style={!lightMode ? { color: textColor.dark_text, fontFamily: 'AR One Sans, sans-serif' } : { color: textColor.light_text, fontFamily: 'AR One Sans, sans-serif' }}>
              During my internships, I worked with React, Node.js, Express, MongoDB, and Django, gaining practical experience in developing REST APIs, integrating databases, and implementing core features like authentication and CRUD operations.
               These experiences helped me strengthen my problem-solving skills and understand real-world development workflows.
I’m passionate about learning new technologies, 
writing clean and maintainable code, and continuously improving my skills.
I’m currently seeking an entry-level software developer role where I can grow as a professional and contribute to impactful projects.
              </p>
            </motion.div>

          </Col>
        </Row>
      </div>
    </>
  )
}

export default About