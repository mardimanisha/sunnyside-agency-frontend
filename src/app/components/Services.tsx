import React from 'react';

export const Services = () => {
  return (
    <section className="sm:flex sm:flex-row">
      {/* Graphic Design Section */}
      <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] sm:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-cover bg-center h-[40rem] w-full sm:h-[31.25rem] sm:px-5% text-darkDesaturatedCyan flex items-end">
        <div className="flex flex-col items-center text-center p-6 pb-12 sm:pb-5">
          <h2 className="text-2xl sm:text-3xl font-fraunces font-extrabold text-center p-3">Graphic Design</h2>
          <p className="font-barlow font-medium sm:px-8 py-4 leading-relaxed">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
          </p>
        </div>
      </div>

      {/* Photography Section */}
      <div className="bg-[url('/images/mobile/image-photography.jpg')] sm:bg-[url('/images/desktop/image-photography.jpg')] bg-cover bg-center h-[40rem] w-full sm:h-[31.25rem] sm:px-5% text-darkBlue flex items-end">
        <div className="flex flex-col items-center text-center p-6 pb-12 sm:pb-5">
          <h2 className="text-2xl sm:text-3xl font-fraunces font-extrabold text-center p-3">Photography</h2>
          <p className="font-barlow font-medium sm:px-8 py-4 leading-relaxed">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};
