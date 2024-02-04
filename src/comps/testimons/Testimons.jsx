import React, { useState } from 'react'
import './testimons.css'
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from "framer-motion";



const Testimons = () => {


    const transition = {
      type:'spring',
      duration:4
    }

    const[selected,setSelected] =useState(0)
    const tlength = testimonialsData.length;


    const goingLeft = () => {
        if(selected ===0) {
            setSelected(tlength - 1)
        } else{
            setSelected((prev) => prev -1  )
        }
    }
    
    const goingRight = () => {
        if(selected ===tlength -1) {
            setSelected(0)
        } else{
            setSelected((prev) => prev + 1  )
        }
    }


  return (
    <div className='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>

        <span>
            {testimonialsData[selected].review}

        </span>
        <span >
            
            {testimonialsData[selected].name} - {testimonialsData[selected].status}

        </span>


      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity:0 , x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{...transition,duration:2}}
        ></motion.div>
        <div></div>

        <motion.img
        key={selected}
        initial={{opacity:0, x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        
        
        src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img src={leftArrow} alt=""  onClick={goingLeft}/>
            <img src={rightArrow} alt="" onClick={goingRight} />
        </div>
      </div>
    </div>
  )
}

export default Testimons
