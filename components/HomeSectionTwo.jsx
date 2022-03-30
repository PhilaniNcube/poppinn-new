import React from 'react';

const HomeSectionTwo = () => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(/images/bedroom-blue-3.jpg)' }}
    >
      <div className="flex flex-start items-end max-w-7xl mx-auto min-h-[60vh] px-6 md:px-2 lg:px-0 py-6">
        <div className="px-6 py-8 bg-gray-300 bg-opacity-90 mt-16 md:w-3/6">
          <h2 className="font-montMedium text-gray-800 text-base md:text-2xl lg:text-4xl">
            Let us help you list <br /> your property
          </h2>
          <p className="text-base text-gray-700 mt-3">
            Are you looking to make your property work for you? We can can help
            manage you property for either long term or short term stays.
          </p>
          <button className="bg-red-500 mt-4 text-white hover:bg-red-600 font-montMedium text-lg uppercase px-4 py-2 rounded-full shadow-md hover:shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
