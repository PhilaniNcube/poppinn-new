import React from 'react';
import Image from 'next/image';

const HomeSectionOne = () => {
  return (
    <div
      className="max-w-7xl mx-auto my-12 min-h-fit bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: 'url(/images/outline.svg)' }}
    >
      <div className="w-full px-8 md:px-20 mt-12 text-gray-700">
        <p className="text-base text-center">
          This modern apartment is conveniently located close to popular
          shopping malls like Bryanston and Morningside Shopping Centre as well
          as Nicolway. It’s a mere 8km from Sandton City and the Sandton
          Gautrain Station.
        </p>
        <p className="text-base text-center mt-4">
          Thanks to uncapped WiFi, kikcback and enjoy your favourite shows on
          Nteflix, Showmax, YouTube and other streaming sites from the comfort
          of the lounge or the main bedroom.
        </p>

        <p className="font-montBold text-center text-lg md:text-xl mt-2">
          “Popp Inn” would be delighted to host you!
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 md:gap-6 mt-4 mb-12">
        <div className="aspect-video">
          <Image
            className="aspect-video"
            width={1920}
            height={1280}
            alt="living room"
            src="/images/living-2.jpg"
          />
        </div>
        <div className="aspect-video">
          <Image
            className="aspect-video"
            width={1920}
            height={1280}
            alt="kitchen"
            src="/images/bedroom-yellow.jpg"
          />
        </div>
        <div className="aspect-video">
          <Image
            className="aspect-video"
            width={1920}
            height={1280}
            alt="pool"
            src="/images/building.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
