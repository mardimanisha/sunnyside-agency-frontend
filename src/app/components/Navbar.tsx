'use client'
import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    setIsButtonVisible(isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 font-barlow text-white">
      <p className="font-extrabold text-2xl tracking-tight">sunnyside</p>

      <div className="hidden sm:block">
        <ul className="flex items-center space-x-6 text-base font-sm">
          <li className="relative underline-effect">
            <a href="#about" className="cursor-pointer">About</a>
          </li>
          <li className="relative underline-effect">
            <a href="#services" className="cursor-pointer">Services</a>
          </li>
          <li className="relative underline-effect">
            <a href="#projects" className="cursor-pointer">Projects</a>
          </li>
          <li className='text-black bg-white font-fraunces p-4 font-semibold hover:text-white hover:bg-white/30 py-3 px-7 rounded-full transition-all duration-300 ease-in-out'>
            <a href='#contact' className="cursor-pointer">
              CONTACT
            </a>
          </li>
        </ul>
      </div>


      {isButtonVisible && (
        <a href='#contact' className="sm:hidden" onClick={handleToggleMenu}>
          <svg width="1.5rem" height="1.125rem" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd" />
          </svg>
        </a>
      )}

      <div className={`${isOpen ? 'flex' : 'hidden'}`}>
        <a href='#contact' className="sm:hidden" onClick={handleToggleMenu}>
          <svg width="1.5rem" height="1.125rem" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd" />
          </svg>
        </a>
        <div className="flex justify-center items-center fixed bg-white mt-12 sm:hidden left-1/2 transform -translate-x-1/2 w-[90%] h-[72%] p-4">
          <ul className="flex flex-col text-neutral-darkGrayishBlue items-center space-y-6 p-8 text-base font-sm">
            <li className="relative">
              <a href="#about" className="cursor-pointer">About</a>
            </li>
            <li className="relative">
              <a href="#services" className="cursor-pointer">Services</a>
            </li>
            <li className="relative">
              <a href="#projects" className="cursor-pointer">Projects</a>
            </li>
            <li>
              <a href='#contact' className="text-black bg-yellow font-fraunces p-4 font-semibold hover:bg-white/30 py-3 px-7 rounded-full transition-all duration-300 ease-in-out">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
