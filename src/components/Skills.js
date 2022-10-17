import React from 'react';
import { skills } from '../data'

const Skills = () => {
  return (
    <section className=' py-12'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-7 md:grid-flow-row'>
                {skills.map((skill, index) => {
                    return( 
                    <div className='flex items-center justify-center' key={index}> 
                        <img src={skill.image} />
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills