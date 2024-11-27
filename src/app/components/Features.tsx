import Image from 'next/image'
import React from 'react'

export const Features = () => {
  return (
    <>
       <div className='sm:flex order-x'>
          <div className='sm:flex order-2 sm:w-1/2'>
            <Image 
              src={'/images/mobile/image-transform.jpg'} 
              alt='transform image' 
              height={500} 
              width={500} 
              className='sm:hidden'
            />

            <Image 
              src='/images/desktop/image-transform.jpg' 
              alt='transform image for desktop' 
              height={500} 
              width={700} 
              className="hidden sm:block" 
            />
          </div>
          <div className='sm:w-1/2 sm:flex order-1'>
            <div className='flex flex-col sm:text-left items-center sm:items-start text-center p-8 sm:px-24 sm:py-32'>
              <h2 className="text-4xl sm:pl-2 sm:pr-20 sm:text-left font-fraunces font-bold text-center p-4">Transform your brand</h2>
              <p className='font-barlow sm:px-2 p-4 text-neutral-veryDarkGrayishBlue'>We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
              <span className='cursor-pointer uppercase sm:p-2 p-4 font-fraunces font-bold underline underline-offset-1 decoration-softRed decoration-4'>Learn More</span>
            </div>
          </div>
        </div>

        <div className='sm:flex order-x'>
        <div className='sm:flex order-1 sm:w-1/2'>
            <Image 
              src={'/images/mobile/image-stand-out.jpg'} 
              alt='stand-out image' 
              height={500} 
              width={500} 
              className='sm:hidden'
            />

            <Image 
              src='/images/desktop/image-stand-out.jpg' 
              alt='stand-out image for desktop' 
              height={500} 
              width={700} 
              className="hidden sm:block" 
            />
        </div>
        <div className='sm:w-1/2 sm:flex order-2'>
          <div className='flex flex-col sm:text-left items-center sm:items-start text-center p-8 sm:px-24 sm:py-32'>
            <h2 className="text-4xl sm:pl-2 sm:pr-20 sm:text-left font-fraunces font-bold text-center p-4">Stand out to the right audience</h2>
            <p className='font-barlow sm:px-2 p-4 text-neutral-veryDarkGrayishBlue'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <span className='cursor-pointer uppercase sm:p-2 p-4 font-fraunces font-bold underline underline-offset-1 decoration-softRed decoration-4'>Learn More</span>
          </div>
        </div>
    </div>
    </>

    
  )
}
