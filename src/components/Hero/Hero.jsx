import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'
export const Hero = () => {
  const transition = {type: ' spring',duration : 3}
  const mobile = window.innerWidth<=768 ? true:false;
 return (
    <div className='hero' id='home'>

    <div className="blur hero-blur"></div>
    <div className="left-h">
      <Header/>
{/*The best ad*/}
      <div className="the-best-ad">

        <motion.div
          initial={{left: mobile? "169px": '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}>
          </motion.div>


        <span>The best fitness club in the town</span>
      </div>
{/*Hero Heading*/}
      <div className="hero-text">
        <div>
        <span className='stroke-text'>Shape </span>
        <span>Your</span>
        </div>
        <div><span>
          Ideal body
        </span></div>
        <div>
        <span>At The Fit Club we will help you to shape and build your ideal body so that you live your life to fullest.</span>
        </div>
      </div>



      {/*figures*/}
      <div className='figures'>
      
        <div>
         <span>
         <NumberCounter end={140} start={100} delay='4' preFix="+" />
         </span>
         <span>expert coaches</span>
        </div>
        <div>
         <span>
         <NumberCounter end={978} start={800} delay='4' preFix="+" />
         </span>
         <span>members joined</span>
        </div>
        <div>
         <span>
         <NumberCounter end={50} start={30} delay='4' preFix="+" />
         </span>
         <span>fitness programs</span>
        </div>
      </div>

      {/*Hero buttons*/}

      <div className="hero-buttons">
        <buttons className="btn">Get started</buttons>
        <buttons className="btn">Learn more</buttons>
      </div>
    </div>
    <div className="right-h">
     <button className='btn'>Join now</button>


    <motion.div 
    initial={{right: "-1rem"}}
    whileInView={{right: "4rem"}}
    transition={transition}
    className="heart-rate">
      <img src={Heart} alt="" />
      <span>Heart Rate</span>
      <span>116 bpm</span>
    </motion.div>

    {/* hero images */}

    <img src={hero_image} alt="" className="hero-image" />
    <motion.img 
    initial={{right: "11rem"}}
    whileInView={{right: "20rem"}}
    transition={transition}
    src={hero_image_back} alt="" className="hero-image-back" />

    {/* calories */}

    <motion.div
    initial={{right: "37rem"}}
    whileInView={{right:"28rem"}}
    transition={{transition}}
     className="calories">
      <img src={Calories} alt="" />
      <div>
      <span>Calories Burned</span>
      <span> 220 kcals</span>
      </div>
    </motion.div>
  </div>      
</div>
  )
}



