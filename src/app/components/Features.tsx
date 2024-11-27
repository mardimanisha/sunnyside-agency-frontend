import Image from 'next/image';
import React from 'react';

// Reusable FeatureSection Component
const FeatureSection = ({
  mobileImage,
  desktopImage,
  altText,
  title,
  description,
  imageFirst,
}: {
  mobileImage: string;
  desktopImage: string;
  altText: string;
  title: string;
  description: string;
  imageFirst?: boolean;
}) => {
  return (
    <div className={`sm:flex ${imageFirst ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Image Section */}
      <div className="sm:w-1/2">
        <Image
          src={mobileImage}
          alt={altText}
          height={500}
          width={500}
          className="sm:hidden"
        />
        <Image
          src={desktopImage}
          alt={altText}
          height={500}
          width={700}
          className="hidden sm:block"
        />
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="text-center sm:text-left max-w-xl">
          <h2 className="text-4xl font-fraunces font-bold mb-4">{title}</h2>
          <p className="font-barlow text-neutral-veryDarkGrayishBlue mb-6">
            {description}
          </p>
          <span className="cursor-pointer uppercase font-fraunces font-bold underline underline-offset-2 decoration-softRed decoration-4">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <>
      <FeatureSection
        mobileImage="/images/mobile/image-transform.jpg"
        desktopImage="/images/desktop/image-transform.jpg"
        altText="Transform your brand"
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        imageFirst={false} 
      />

      <FeatureSection
        mobileImage="/images/mobile/image-stand-out.jpg"
        desktopImage="/images/desktop/image-stand-out.jpg"
        altText="Stand out to the right audience"
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        imageFirst 
      />
    </>
  );
};
