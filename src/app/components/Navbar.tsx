'use client'
import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    setIsButtonVisible(isOpen);
  };

  return (
    <nav className='flex justify-between items-center p-4 font-barlow text-white'>
      <p className="font-extrabold text-2xl tracking-tight">sunnyside</p>

      <div className='hidden sm:block'>
        <ul className='flex items-center space-x-6 text-base font-sm'>
          <li className="relative underline-effect cursor-pointer">About</li>
          <li className="relative underline-effect cursor-pointer">Services</li>
          <li className="relative underline-effect cursor-pointer">Projects</li>
          <button className='text-black bg-white font-fraunces p-4 font-semibold hover:text-white hover:bg-white/30 py-3 px-7 rounded-full transition-all duration-300 ease-in-out'>CONTACT</button>
        </ul>
      </div>

      {isButtonVisible && (
        <button className='sm:hidden' onClick={handleToggleMenu}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg> 
        </button>
      )}

      <div className={`${isOpen ? 'flex' : 'hidden'}`}>
        <button className='sm:hidden' onClick={handleToggleMenu}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg> 
        </button>
        <div className='flex justify-center items-center fixed bg-white mt-12 sm:hidden left-1/2 transform -translate-x-1/2 w-[360px] h-72 p-4'>
          <ul className='flex flex-col text-neutral-darkGrayishBlue items-center space-y-6 p-8 text-base font-sm'>
            <li className="relative cursor-pointer">About</li>
            <li className="relative cursor-pointer">Services</li>
            <li className="relative cursor-pointer">Projects</li>
            <button className='text-black bg-yellow font-fraunces p-4 font-semibold hover:bg-white/30 py-3 px-7 rounded-full transition-all duration-300 ease-in-out'>CONTACT</button>
          </ul> 
        </div>
      </div>
    </nav>
  )
}