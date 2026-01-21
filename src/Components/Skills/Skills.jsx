import { motion } from 'framer-motion'
import React from 'react'
import '../Skills/Skills.css'

function Skills({ lightMode,textColor }) {
    const skillSet=[
        {id:1,title:"HTML",pictuer:"https://cdn-icons-png.flaticon.com/512/732/732212.png"},
        {id:2,title:"CSS",pictuer:"https://cdn-icons-png.flaticon.com/512/732/732190.png"},
        {id:3,title:"MongoDB",pictuer:"https://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-png-400.png"},
        {id:5,title:"JavaScript",pictuer:"https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png"},
        {id:6,title:"Express",pictuer:"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"},
        {id:7,title:"python",pictuer:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/250px-Python-logo-notext.svg.png"},
        {id:8,title:"React",pictuer:"https://vistasadindia.com/image/advertising/comperhensive-client.png"},
        {id:9,title:"Node js",pictuer:"https://delogico.com/assets/nodejs-icon.svg"},
    ]
    
    return (
        <>
            <div name='skills' className='w-full   flex items-center pb-5 pt-5  ps-5' style={!lightMode ? { background: textColor.dark_color } : { background: textColor.light_color }}>
                <div className='flex-col w-full md:flex   md:px-3 px-5 gap-6 mx-auto  container  ' >
                    <div className="  text-center   pb-4" >
                        <motion.h3 initial={{ y: '-100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} className='underline decoration-solid decoration-orange-600 underline-offset-8'
                         style={!lightMode ?{ color: textColor.dark_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }:{ color: textColor.light_text, fontFamily: 'IBM Plex Sans ,sans-serif', fontSize: '40px' }}>Skills</motion.h3>
                    </div>

                    <motion.div initial={{ y: '-50px', opacity: '0' }} whileInView={{ y: '50px', opacity: '1' }} transition={{ duration: '.50', delay: '1' }} viewport={{ once: true }} style={{ color: textColor.dark_text }} className='w-full grid felx justify-center overflow-hidden items-center grid-cols-2 pb-52   md:grid-cols-4  md:gap-[50px]'>
                      {
                        skillSet && skillSet.map(skill=>(
                            <motion.div whileHover={{ scale: 1.1 }} className={!lightMode ? 'p-3 w-75 shadow border-2 border-indigo-200 border-x-indigo-500' :'p-3 w-75 shadow border-2 border-indigo-900 border-x-indigo-500'}>
                            <img className='w-20 h-20 mx-auto' src={skill.pictuer} alt="" />
                            <h4 className='text-center mt-2' style={!lightMode ? { color:textColor.dark_text  } : { color: textColor.light_text }} >{skill.title}</h4>
                        </motion.div>

                        ))
                      }
                        
                    </motion.div>


                </div>
            </div>
        </>
    )
}

export default Skills