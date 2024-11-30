import Image from 'next/image'
import React from 'react'

export const Testimonials = () => {
  return (
    <section>
      <div className='flex flex-col items-center py-16 sm:py-10'>
        <p className='uppercase text-neutral-grayishBlue font-bold font-fraunces tracking-widest p-10'>Client testimonials</p>
        <div className='sm:flex sm:flex-row sm:justify-around sm:px-32'>
          <div className='flex flex-col items-center text-center p-8 sm:p-1'>
            <Image src={'/images/image-emily.jpg'} alt='profile' height={80} width={80} className='rounded-full' />
            <p className='p-7 sm:px-0 text-neutral-veryDarkGrayishBlue font-medium'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <div>
              <p className='text-neutral-veryDarkDesaturatedBlue font-fraunces font-black'>Emily R.</p>
              <p className='text-neutral-grayishBlue font-barlow p-2'>Marketing Director</p>
            </div>
          </div>

          <div className='flex flex-col items-center text-center p-8 sm:p-1'>
            <Image src={'/images/image-thomas.jpg'} alt='profile' height={80} width={80} className='rounded-full' />
            <p className='p-7 sm:px-0 text-neutral-veryDarkGrayishBlue font-medium'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <div>
              <p className='text-neutral-veryDarkDesaturatedBlue font-fraunces font-black'>Thomas S.</p>
              <p className='text-neutral-grayishBlue font-barlow p-2'>Chief Operating Officer</p>
            </div>
          </div>

          <div className='flex flex-col items-center text-center p-8 sm:p-1'>
            <Image src={'/images/image-jennie.jpg'} alt='profile' height={80} width={80} className='rounded-full' />
            <p className='p-7 sm:px-0 text-neutral-veryDarkGrayishBlue font-medium'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div>
              <p className='text-neutral-veryDarkDesaturatedBlue font-fraunces font-black'>Jennie F.</p>
              <p className='text-neutral-grayishBlue font-barlow p-2'>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
