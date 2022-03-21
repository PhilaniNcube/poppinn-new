/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const travel = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="h-[80vh] object-cover">
        <img
          className="h-[80vh] object-cover"
          src="/images/travel.svg"
          alt="Travel Coming Soon"
        />
      </div>
    </div>
  );
};

export default travel;
