/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
export default function IndexPage() {
  const [show, setShow] = useState(null);

  return (
    <Fragment>
      <div className="relative overflow-y-hidden h-screen">
        <img
          src="/images/airport.jpeg"
          className="absolute h-full object-cover object-center w-full"
          alt=""
        />

        <div className="absolute bg-gray-900 h-full flex items-center w-full opacity-25" />
        <div className="mx-auto container lg:px-0 px-4 h-full relative">
          <div className="flex flex-col items-center h-full justify-center lg:pb-28 pb-14">
            <h1 className="lg:text-6xl text-4xl text-white font-montBold my-16 text-center">
              See you at the boarding gates
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
