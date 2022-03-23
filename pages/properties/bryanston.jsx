import React, { Fragment } from 'react';
import Image from 'next/image';

const bryanston = () => {
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto my-4">
        <h1 className="font-montBold text-xl md:text-2xl mb-2">
          “Pop Inn” modern apartment in heart of Bryanston
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-2">
          <div className="w-full rounded-l">
            <div className="rounded-l inline aspect-video">
              <Image
                width="100%"
                height="56.4%"
                layout="responsive"
                alt="main"
                src="/images/living.jpg"
                className="rounded-l-xl inline aspect-video object-cover"
              />
            </div>
          </div>
          <div className="rounded-r w-full grid grid-cols-2 gap-2">
            <div className="">
              <Image
                width="100%"
                height="56.25%"
                layout="responsive"
                alt="main"
                src="/images/kitchen-small-3.jpg"
                className="aspect-video object-cover"
              />
            </div>
            <div className="rounded-r ">
              <Image
                width="100%"
                height="56.25%"
                layout="responsive"
                alt="main"
                src="/images/kitchen-small.jpg"
                className="rounded-tr-xl aspect-video object-cover"
              />
            </div>
            <div className="">
              <Image
                width="100%"
                height="56.25%"
                layout="responsive"
                alt="main"
                src="/images/tv-1.jpg"
                className="aspect-video object-cover"
              />
            </div>
            <div className="">
              <Image
                width="100%"
                height="56.25%"
                layout="responsive"
                alt="main"
                src="/images/welcome.jpg"
                className="rounded-br-xl aspect-video object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex-col md:flex-row justify-between">
          <div>
            <h2 className="font-montMedium text-lg">Entire rental unit</h2>
            <p className="text-base font-montLight">
              4 guests - 2 bedrooms - 2 beds - 2 baths
            </p>
          </div>

          <h2 className="font-montMedium text-lg">R1500/ night</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default bryanston;
