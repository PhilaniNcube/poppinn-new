import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <div className="my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="w-full flex flex-col items-start justify-center">
          <div className="aspect-square">
            <Image
              src="/images/sol.jpg"
              alt="host"
              className="aspect-square rounded-full"
              width={500}
              height={500}
            />
          </div>
          <h2 className="text-xl">Sol Bokwe</h2>
          <h2 className="text-lg">Popp Inn Property </h2>
          <h2 className="text-lg">Managing Partner </h2>
        </div>
        <div className="w-full px-3 py-8">
          <h2>Send us a message</h2>
          <form className="w-full mt-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-500 text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-3 py-1 text-base text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:bg-slate-100 rounded"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-6">
              <label className="text-gray-500 text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-1 text-base text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:bg-slate-100 rounded"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-6">
              <label className="text-gray-500 text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                aria-label="your message"
                name="message"
                placeholder="Your Message"
                className="px-3 py-1 text-base text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:bg-slate-100 rounded"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
