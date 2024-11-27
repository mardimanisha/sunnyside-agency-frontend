import React from 'react'

export const Services = () => {
  return (
    <div className='sm:flex sm:flex-row'>
      <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] sm:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-cover bg-center h-[650px] w-full sm:h-[500px] sm:px-20 text-darkDesaturatedCyan flex items-end">
        <div className='flex flex-col items-center text-center p-6 pb-12 sm:pb-5'>
          <h2 className="text-4xl font-fraunces font-extrabold text-center p-3">Graphic design</h2>
          <p className='font-barlow font-semibold sm:px-2 py-6'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
      </div>
      <div className="bg-[url('/images/mobile/image-photography.jpg')] sm:bg-[url('/images/desktop/image-photography.jpg')] bg-cover bg-center h-[650px] w-full sm:h-[500px] sm:px-20 text-darkBlue flex items-end">
        <div className='flex flex-col items-center text-center p-6 pb-12 sm:pb-5'>
          <h2 className="text-4xl font-fraunces font-extrabold text-center p-3">Photography</h2>
          <p className='font-barlow font-semibold sm:px-2 py-6'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>
  )
}
