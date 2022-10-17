import React from 'react';
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section text-white bg-tertiary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block text-white'> What I do for clients</h2>
                <p className='subtitle'>Created and implemented highly complex contingency plans in preparation for website outages and  i have Developed custom websites to meet individual client needs.</p> 
            </div>
            <div className='grid lg:grid-cols-4 text-white gap-8'>
                {services.map((service, index) => {
                    const {icon, name, description} = service;
                    return <div className='bg-secondary p-6 rounded-2xl' key={index}>
                        <div className='text-accent rounded-sm w-12 h-12 justify-center items-center mb-24 text-[28px]'> {icon} </div>
                        <h4 className='text-xl font-medium mb-2 text-white'> {name} </h4>
                        <p> {description} </p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services