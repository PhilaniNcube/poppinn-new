import React, { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Thank you for your interest. We will contact you shortly');
  };

  return (
    <div className="my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="aspect-square">
            <Image
              src="/images/sol.jpg"
              alt="host"
              className="aspect-square rounded-full"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center w-full mt-4 ">
            <h2 className="text-xl">Sol Bokwe</h2>
            <h2 className="text-lg">Managing Partner </h2>
            <h2 className="text-lg">Popp Inn Property </h2>
          </div>
        </div>
        <div className="w-full px-3 py-8">
          <h2>Send us a message</h2>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full text-gray-700"
          >
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_INFO_WEBFORMS_API}
            ></input>

            <input type="hidden" name="subject" value="New Enquiry"></input>

            <input
              type="hidden"
              name="from_name"
              value="Popp Inn Website"
            ></input>

            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            ></input>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-500 text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="your message"
                name="message"
                placeholder="Your Message"
                className="px-3 py-1 text-base text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:bg-slate-100 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white text-base font-montBold mt-6 px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
