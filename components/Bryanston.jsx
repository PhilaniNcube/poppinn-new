import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiBed } from 'react-icons/bi';

const Bryanston = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="w-full md:w-[40vw] md:h-[40vw] aspect-square rounded-full flex justify-center">
          <Image
            src="/images/living.jpg"
            className="aspect-square object-cover rounded-full"
            width={600}
            height={600}
            alt="living room"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-center py-4 md:py-8 px-2">
          <h1 className="font-montBold text-red-500 text-2xl md:text-4xl">
            Bryanston{' '}
            <span className="font-montMedium text-gray-800">
              Modern Apartment
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 md:pr-6">
            This modern apartment is situated on the quieter side of Bryanston
            in a newly built picturesque complex.
          </p>

          <hr className="text-gray-700 bg-gray-600 h-1 mt-4 w-full" />

          <div className="flex flex-wrap justify-between mt-4 w-full">
            <div className="flex flex-col">
              <p className="text-base text-gray-600 uppercase">From</p>
              <h2 className="text-red-500 uppercase font-montMedium text-xl md:text-3xl">
                R1500.00
              </h2>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-600 uppercase">2 - 4 Guests</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-600 uppercase">2 Bedrooms</p>
              <div className="text-red-600 h-8 w-8">
                <BiBed className="text-red-600 h-8 w-8" />
              </div>
            </div>
          </div>
          <Link href="/properties/bryanston" passHref>
            <button className="bg-red-500 mt-4 text-white hover:bg-red-600 font-montMedium text-lg uppercase px-4 py-2 rounded-full shadow-md hover:shadow-sm">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bryanston;
