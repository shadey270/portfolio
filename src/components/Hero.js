import React from 'react';
import Circle from '../assets/circle.png';
import { motion } from "framer-motion";

// import woman image
import WomanImg from '../assets/img/me.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] grid grid-cols-1 lg:grid-cols-3 bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container col-span-2 lg:ml-[150px]'>
      <motion.div 
           animate={{
            x: 538,
            y: 538,
            scale: 1.2,
            rotate: 180,
          }}
          initial={{scale: 0}}
          transition={{delay:1.5, duration:10.0}}
          ><img src={Circle} className='position:absolute top-0 left-0 right-0 bottom-0 m-auto hidden lg:block ' />
        </motion.div>
            <p className='text-lg text-accent text-center lg:text-left  text-md mb-[22px]'>
              Hey, I'm Shade! 👋
            </p>
            <h1 className='text-4xl leading-[34px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-left'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 text-lg text-center text-sm lg:text-left'>
            Detail-oriented professional with excellent communication, interpersonal and creative thinking skills.
            </p>
            <div className='flex items-center justify-center lg:hidden  '>
            <button className='btn btn-md bg-accent  hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
            </div>
            <button type='link' href='#contact' className='btn btn-md bg-accent hidden lg:block hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          
      </div>
      <div className=''>
      <img src={WomanImg}  alt=''className='lg:mt-[100px] hidden lg:block' />
      <motion.div 
           animate={{
            x: -538,
            y: -538,
            scale: 1.2,
            rotate: 180,
          }}
          initial={{scale: 0}}
          transition={{delay:1.5, duration:10.0}}
          ><img src={Circle} className='position:absolute top-0 left-0 right-0 bottom-0 m-auto hidden lg:block ' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;