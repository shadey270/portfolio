import React from 'react';
import { social } from '../data';
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index) => {
                        const {href, icon} = item;
                        return <a className='text-accent text-base' href={href} key={index}>
                            { icon }
                        </a>
                    })}
                </div>
                <div className='text-white text-2xl text-bold'>
                 <span>Shade Oduwaye</span>
                </div>
                <p className='text-primary'>&copy; 2022 Shade Oduwaye. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer