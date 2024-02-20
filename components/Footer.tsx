import React from 'react';
import { FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#6656FF] py-8 w-full h-screen'>
        <div className='container mx-auto items-center justify-between py-5 flex gap-3'>
            <div className='mt-20 text-white w-1/3'>
                <h1 className='text-4xl font-semibold'>ContentForge.AI</h1>
                <div className='flex gap-4 mt-2'>
                    <div className='rounded-full p-2 border-2 flex items-center justify-center'>
                        <FaTwitter/>
                    </div>
                    <div className='rounded-full p-2 border-2 flex items-center justify-center'>
                        <FaInstagram/>
                    </div>
                    <div className='rounded-full p-2 border-2 flex items-center justify-center'>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex items-center text-white mt-20 '>
                <h1 className='font-semibold text-2xl'>Made with love Prateek Parmar</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer