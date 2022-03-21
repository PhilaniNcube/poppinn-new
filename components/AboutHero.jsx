import React from 'react';

const AboutHero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[80vh] flex justify-center items-center bg-blend-multiply bg-gray-600"
      style={{ backgroundImage: 'url(/images/living.jpg)' }}
    >
      <h1 className="font-montBold text-2xl md:text-4xl lg:text-[6rem] text-white">
        About Us
      </h1>
    </div>
  );
};

export default AboutHero;
