import React from 'react';
import { navLinks } from '../constants';
import Link from 'next/link';
import { Button } from './ui/button';

type NavLinkTypes = {
  name : string,
  link : string
}

const Header = () => {
  return (
    <header className='bg-transparent px-20 w-full py-6 text-white fixed z-[999]'>
      <nav className='flex items-center justify-between'>
        <div>
          <Link href="/" className='text-3xl text-gray-200 font-semibold'>ContentForge.AI</Link>
        </div>
        <div>
          <ul className='flex gap-5'>
            {
              navLinks.map((item:NavLinkTypes) => (
                <li key={item.link} className='text-lg font-semibold'>
                  <Link href={item.link} className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <Button className='bg-green-400 px-16 w-full sm:w-fit border-2 rounded-full border-gray-500' size="lg" asChild>
          <Link href="/auth/sign-in">Login</Link>
        </Button>
      </nav>
    </header>
  )
}

export default Header