/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import supabase from '../lib/supabase';

const Travel = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.from('enquiries').insert([
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    ]);

    console.log({ data, error });
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto h-[80vh] grid grid-cols-1 gap-6 md:grid-cols-2 px-6 md:px-4 lg:px-0">
      <div className="h-[80vh] flex w-full items-center justify-center object-cover">
        <img
          className="h-[70vh] object-cover"
          src="/images/travel.svg"
          alt="Travel Coming Soon"
        />
      </div>

      <div className="w-full h-full py-8 flex flex-col justify-start items-around rounded-lg shadow-md px-4 md:px-6 bg-slate-200 dark:bg-slate-900">
        <h1 className="text-xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-12">
          Booking Enquiry
        </h1>

        <form
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col ">
            <label
              htmlFor="firstName"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="lastName"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="email"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="phoneNumber"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="startDate"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              required
              onChange={(e) => setStartDate(e.target.value)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="endDate"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              required
              onChange={(e) => setEndDate(e.target.value)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            />
          </div>

          <div className="flex flex-col mt-8">
            <button
              disabled={loading}
              type="submit"
              className="text-gray-200 bg-blue-700 text-center font-normal w-64 h-10 text-sm rounded shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Travel;
