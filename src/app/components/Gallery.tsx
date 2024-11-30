import Image from 'next/image'
import React from 'react'

export const Gallery = () => {
  return (
    <section>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex flex-row'>
          <Image src={'/images/mobile/image-gallery-milkbottles.jpg'} alt='' height={200} width={200} className='sm:hidden w-1/2' />
          <Image src={'/images/mobile/image-gallery-orange.jpg'} alt='' height={200} width={200} className='sm:hidden w-1/2'/>
          <Image src={'/images/desktop/image-gallery-milkbottles.jpg'} alt='' height={300} width={300} className='hidden sm:block w-1/2'/>
          <Image src={'/images/desktop/image-gallery-orange.jpg'} alt='' height={300} width={300} className='hidden sm:block w-1/2'/>
        </div>
        <div className='flex flex-row'>
          <Image src={'/images/mobile/image-gallery-cone.jpg'} alt='' height={200} width={200} className='sm:hidden w-1/2'/>
          <Image src={'/images/mobile/image-gallery-sugar-cubes.jpg'} alt='' height={200} width={200} className='sm:hidden w-1/2'/>
          <Image src={'/images/desktop/image-gallery-cone.jpg'} alt='' height={300} width={300} className='hidden sm:block w-1/2'/>
          <Image src={'/images/desktop/image-gallery-sugarcubes.jpg'} alt='' height={300} width={300} className='hidden sm:block w-1/2'/>
        </div>
      </div>
    </section>
  )
}
