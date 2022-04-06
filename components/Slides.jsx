/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Slides = () => {
  return (
    <>
      <CarouselProvider
        className="block"
        isIntrinsicHeight={true}
        totalSlides={7}
        visibleSlides={1}
        step={1}
        loop={true}
        autoPlay={true}
        infinite={true}
      >
        <div className="overflow-hidden relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="max-h-[100vh] mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-full flex items-center justify-start transition ease-out duration-700"
              >
                <Slide index={0}>
                  <div className="flex flex-shrink-0 relative w-screen sm:w-auto">
                    <Image
                      width={1920}
                      height={1280}
                      src="/images/living.jpg"
                      alt="black chair and white table"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-30 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Luxury Apartment
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        Modern luxury apartments with contemporary furniture
                      </h3>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <Image
                      width={1920}
                      height={1280}
                      src="/images/living-2.jpg"
                      alt="sitting area"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-30 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Comfort and Style
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        Built for a relaxing stay
                      </h3>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <Image
                      width={1920}
                      height={1280}
                      src="/images/bedroom-blue-2.jpg"
                      alt="sitting area"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-30 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Comfortable Bedroom
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        Perfect for a good night&apos;s sleep
                      </h3>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <Image
                      width={1920}
                      height={1280}
                      src="/images/kitchen-small-3.jpg"
                      alt="sitting area"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-30 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Fully Equipped Kitchen
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        All the kitchen appliances and utensils you need for a
                        longer stay
                      </h3>
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <Image
                      width={1920}
                      height={1280}
                      src="/images/bathroom.jpg"
                      alt="black chair and white table"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-40 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Full Bathroom
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        Two bathrooms for convenience
                      </h3>
                    </div>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <Image
                      width={1920}
                      height={1280}
                      src="/images/small-strata.jpg"
                      alt="black chair and white table"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-30 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Located In Bryanston
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        Great neighbourhood
                      </h3>
                    </div>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <Image
                      width={5184}
                      height={3456}
                      src="/images/pool.jpg"
                      alt="black chair and white table"
                      className="object-cover h-full w-full aspect-video"
                    />
                    <div className="bg-gray-800 bg-opacity-30 flex flex-col items-start justify-center absolute w-full h-full px-12 md:px-24">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[6rem] font-montBold leading-5 md:leading-4 text-white">
                        Pool
                      </h2>
                      <h3 className="text-md md:text-xl lg:text-2xl font-normal leading-5 lg:leading-6 lg:mt-12 text-white">
                        Pool access
                      </h3>
                    </div>
                  </div>
                </Slide>
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
};

export default Slides;
