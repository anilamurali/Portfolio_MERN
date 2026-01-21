import {  motion } from 'framer-motion'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import movie from '../Assets/movie.png'
import restornt from '../Assets/restorent.png'
import quotes from '../Assets/quotes.png'
import weather from '../Assets/weather.png'


function Project({ lightMode, textColor }) {
  const [showProjects] = useState([
    { id: 1, title: "Movie Search App", tecknologyies: ["React", "CSS", "Bootsreap", "API Fetch"], picture: movie },
    { id: 2, title: "Restaurant App", tecknologyies: ["React", "CSS", "Bootsreap", "API Fetch"], picture: restornt },
    { id: 3, title: "Quote Generator", tecknologyies: ["React", "CSS", "Bootsreap", "API Fetch"], picture: quotes },
    { id: 4, title: "Weather App", tecknologyies: ["React", "CSS", "Bootsreap", "API Fetch"], picture: weather }

  ])


  return (
    <>

      <div name='project' className='w-full   flex items-center pb-5 pt-5  ps-5' style={!lightMode ? { background: textColor.dark_color } : { background: textColor.light_color }}>
        <div className='flex-col w-full md:flex   md:px-3 px-5 gap-6 mx-auto  container  ' >
          <div className="  text-center   pb-4" >
            <motion.h3 initial={{ y: '-100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} className='underline decoration-solid decoration-orange-600 underline-offset-8'
              style={!lightMode ? { color: textColor.dark_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' } : { color: textColor.light_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }}>Project</motion.h3>
          </div>

          <Row>

            {showProjects && showProjects.map(project => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <div className={`rounded-md border-2 hover:border-orange-600 transition p-3 mt-2 flex flex-col items-center ${!lightMode? ' border-l-indigo-300 border-t-indigo-300 border-indigo-600':' border-l-violet-800 border-t-violet-800 border-indigo-600'}`}>
                  <div className="w-full rounded-3xl p-2 text-center relative">
                    <div className="flex justify-center">
                      {/* Image */}
                      <img
                        src={project.picture}
                        alt="Project"
                        className="w-80 h-48 rounded-xl "
                      />
                    </div>
                    <h2 className="text-white text-xl font-semibold leading-snug mb-6">
                     {project.title}
                    </h2>
                    <div className='border-2 rounded-md border-r-indigo-300 border-b-indigo-300 border-indigo-600 p-2'>
                    <p className={`font-normal ${!lightMode? 'text-blue-50':'text-gray-600'}`}> Technologies Used : {project.tecknologyies.join(', ')}</p>
                 
                  </div>
                  </div>
                  {/* Buttons */}
                  <div className="mt-2 flex gap-2">
                    <button className={`rounded border-2 w-20 border-orange-600 text-sm   hover:bg-orange-600 hover:scale-110  transition-transform duration-300 ${!lightMode?'text-blue-100 ':'text-gray-600 hover:text-blue-50'}`} >
                      Github
                    </button>
                    <button className={`rounded border-2 w-20 border-orange-600 text-sm   hover:bg-orange-600 hover:scale-110  transition-transform duration-300   ${!lightMode?'text-blue-100 ':'text-gray-600 hover:text-blue-50'}`} >
                      Live Demo
                    </button>
                  </div>
                </div>
                {/* <div class="max-w-64 mx-auto m-4  rounded-xl shadow-md overflow-hidden md:max-w-  2xl border-2 border-indigo-300" style={!lightMode ? { background: '#292e45' } : { background: '#ffffff' }} >
                  <div class="md:flex">
                    <div class="md:shrink-0">

                      <img className="h-48 w-full object-cover shadow-md md:h-full md:w-56" src={project.picture} alt="" />
                    </div>
                    <div class="p-4">
                      <div class="uppercase tracking-wide text-sm  font-semibold" style={{ color: textColor.text_color }}>{project.title}</div>

                      <p class="mt-2 " style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }}>Technologies Used : {project.tecknologyies.join(', ')}</p>
                      <motion.div className='md:flex ' >
                        <motion.button className='me-2 w-24' whileHover={{ scale: 1.1, backgroundColor: textColor.text_color, color: textColor.dark_text }} whileTap={{ scale: .9 }}
                          style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }}>Live Cite</motion.button>
                        <motion.button className='me-2 w-24' whileHover={{ scale: 1.1, backgroundColor: textColor.text_color, color: textColor.dark_text }} whileTap={{ scale: .9 }}
                          style={!lightMode ? { color: textColor.dark_text } : { color: textColor.light_text }}>View Code</motion.button>
                      </motion.div>
                    </div>

                  </div>
                </div> */}
              </Col>
            ))
            }
          </Row>
        </div>
      </div>
    </>
  )
}

export default Project