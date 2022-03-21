import Image from 'next/image';
import React from 'react';

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
              <p className="text-base text-gray-600 uppercase">2 -4 Guests</p>
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
              <p className="text-base text-gray-600 uppercase">2 -4 Guests</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                viewBox="0 0 55.762 55.762"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M55.742,33.132c0.003-0.033,0.02-0.062,0.02-0.097c0-0.07-0.007-0.14-0.021-0.206
		c-0.069-5.551-2.943-8.805-7.144-10.717v-2.938c0-5.718-4.238-9.132-11.338-9.132c-5.316,0-9.027,1.915-10.556,5.278
		c-1.735-2.848-5.254-4.452-10.119-4.452c-7.099,0-11.337,3.414-11.337,9.132v2.68C2.037,24.676,0,27.881,0,33.034v4.943v0.001
		v0.001v5.741c0,1.103,0.897,2,2,2h2.654c1.103,0,2-0.897,2-2v-4.743h42.435v4.743c0,1.103,0.897,2,2,2h2.653c1.103,0,2-0.897,2-2
		v-5.741v-0.001v-0.001V33.132z M2.001,36.979v-2.944h51.741v2.943L2.001,36.979L2.001,36.979z M27.923,19.174
		c0-6.437,6.529-7.132,9.337-7.132s9.338,0.695,9.338,7.132v2.156c-5.489-1.833-12.57-1.935-18.703-1.94
		c-0.002-0.02-0.002-0.04-0.003-0.06C27.9,19.277,27.923,19.23,27.923,19.174z M7.248,20.001c0-6.438,6.53-7.132,9.337-7.132
		c2.714,0,8.887,0.666,9.298,6.521c-6.628,0.004-13.598,0.11-18.635,2.263V20.001z M26.856,21.39c7.174,0,14.89,0.003,20.208,2.152
		c0.099,0.063,0.204,0.106,0.322,0.133c3.572,1.531,5.996,4.086,6.318,8.361H2.032C2.659,22.173,12.765,21.39,26.856,21.39z
		 M2.001,43.722v-4.741h2.653l0.001,4.741H2.001z M51.089,43.722v-4.741h2.653l0.002,4.741H51.089z"
                />
              </svg>
            </div>
          </div>

          <button className="bg-red-500 mt-4 text-white hover:bg-red-600 font-montMedium text-lg uppercase px-4 py-2 rounded-full shadow-md hover:shadow-sm">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bryanston;
