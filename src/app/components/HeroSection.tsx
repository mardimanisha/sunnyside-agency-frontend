import React from 'react'
import { Navbar } from './Navbar'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section>
      <div className="sm:bg-[url('/images/desktop/image-header.jpg')] bg-[url('/images/mobile/image-header.jpg')] bg-cover bg-center sm:h-screen h-[915px] w-full">
        <div className='p-4'>
            <Navbar />
            <div className='flex flex-col justify-evenly items-center my-40 sm:my-12'>
              <h1 className="text-white font-fraunces text-center text-5xl sm:text-5xl font-extrabold uppercase tracking-widest m-16 sm:m-10">We are creatives</h1>
              <Image src='/images/icon-arrow-down.svg' alt='arrow' width={40} height={40} className='sm:m-6 m-16 sm:h-26 sm:w-8' />
            </div>
        </div>
      </div>
    </section>
  )
}
