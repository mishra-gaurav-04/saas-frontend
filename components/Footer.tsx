import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#6656FF] w-full'>
      <div className='container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='text-white w-full md:w-1/3'>
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
        <div className="rounded-full p-2 border-2 flex items-center justify-center">
          <FaLinkedin />
        </div>
      </div>
      <div className="w-full text-center text-white mt-20">
        <h1 className="font-semibold text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
          perspiciatis blanditiis eos accusamus ab sed nulla labore alias
          ducimus?
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
