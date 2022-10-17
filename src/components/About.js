import React from 'react'
import Image from '../assets/img/about.webp'
import ReactTyping from './ReactTyping'

const About = () => {
  return (
    <section id='about' className='section bg-secondary text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-24'>
                <div className='object-cover  lg:w-[566px] md:mx-auto lg:mx-0 rounded-2xl'>
                    <ReactTyping />
                </div>
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 befor:-top-[2rem] before:hidden before:lg:block text-white'>Shade Oduwaye</h2>
                        <p className='mb-4 text-accent'>Front End Developer</p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8'>Detail-oriented professional with excellent communication, interpersonal and creative thinking skills. Aiming to leverage my abilities to successfully fill the vacancy at your company. Frequently praised as hardworking by my peers, I can be relied upon to help your company achieve its goals.
</p>
                    </div>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About