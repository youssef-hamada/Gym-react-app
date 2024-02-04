import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import {motion} from 'framer-motion'

const Hero = () => {

    const mobile = window.innerWidth <= 768 ? true:false

    // console.log(mobile)

    const transition = {
        type:'spring',
        duration:5
    }
  return (
    <div className='hero'>

        <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        

    {/* the best ad  */}
        <div className="the-best-ad">
        <motion.div
        initial={{left: mobile? "150px": "200px"}}
        whileInView={{left:'8px'}}
        transition={{...transition,type:'tween'}}



        ></motion.div>
            <span>the best fitness club in the city</span>
        </div>

    {/* the hero heading  */}
    
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid quia deleniti debitis, maxime aperiam?</span>
            </div>
        </div>

    {/* figures  */}
        <div className="figures">
            <div>
                <span>+140</span><span>Expert Coaches</span>
            </div>
            <div>
                <span>+1400</span><span>member joined</span>
            </div>
            <div>
                <span>+60</span><span>fitness program</span>
            </div>
        </div>

    {/* hero buttons  */}
        <div className="hero-buttons">
            <buttons className="btn">Get started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>

      </div>


    {/* right section  */}
      <div className="right-h">

        <button className="btn">
            Join Now
        </button>

        <motion.div
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={{...transition,duration:"2"}}
        
        className="heart-rate">

            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
        initial={{right:"0rem"}}
        whileInView={{right:"400px"}}
        transition={transition}
        
        src={hero_image_back} alt="" className='hero-image-back' />

        {/* caloires  */}

        <motion.div
        initial={{top:"-1rem"}}
        whileInView={{top:"550px"}}
        transition={{...transition,duration:"6"}}
        
        
        className="calories">
            <img src={Calories} alt="" className='calories-image'/>

            <div>

                <span>Calories burned </span>
                <span>220 kcal</span>
            </div>
        </motion.div>


      </div>
    </div>
  )
}

export default Hero
