/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import TravelComponent from '../components/Travel';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import supabase from '../lib/supabase';
import { useRouter } from 'next/router';

const Travel = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [internationalTravel, setInternationalTravel] = useState(false);
  const [passport, setPassport] = useState(false);
  const [preferences, setPreferences] = useState('');
  const [holidayType, setHolidayType] = useState('');
  const [dreamDestination, setDreamDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.from('leads').insert([
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        cellphone: cellphone,
        gender: gender,
        age: age,
        city: city,
        internationalTravel: internationalTravel,
        preferences: preferences,
        holidayType: holidayType,
        dreamDestination: dreamDestination,
        passport: passport,
      },
    ]);

    alert('Thank you for subscribing! We will be in touch.');

    console.log({ data, error });
    setLoading(false);
    router.push('/see-you');
  };

  return (
    <Fragment>
      <div className="overflow-hidden" style={{ minHeight: '600px' }}>
        <div className="mx-auto max-w-7xl relative px-6 pt-7 lg:px-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center">
            <div className="xl:mt-8">
              <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold">
                <h1 className="lg:text-7xl leading-tight mt-3 font-montBold lg:mt-4">
                  Hey there Globetrotter!
                </h1>
              </div>
              <h2 className="text-sm tracking-wide leading-7 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
                Have you been meaning to book that flight? Do you day dream
                about kicking it back in the clouds while the pilot gets you to
                your dream destination? Who doesn’t want to go on a shopping
                spree in Dubai or sip cocktails on an exotic island? Maybe you
                fancy a party in Ibiza or look forward to capturing an
                instagrammable moment on the Bali Swing right after a floating
                breakfast?
              </h2>
              <h2 className="text-sm tracking-wide leading-7 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
                Whatever it is, we’ve got you!
              </h2>
              <h2 className="text-sm tracking-wide leading-7 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
                We help you “Popp Inn” to any destination in the world and give
                you an unforgettable experience of a lifetime.
              </h2>
              <h2 className="text-sm tracking-wide leading-7 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
                We are not a travel agency. Think of us as Travel Curators! If
                you would like to receive information on our travel innovations
                and packages locally and/or around the world, please fill in the
                form below so we can keep you posted!
              </h2>
            </div>
            <div className="w-full object-cover mt-8 lg:mt-0 rounded-3xl relative">
              <div className="lg:px-0 flex flex-wrap items-start ">
                <div className="">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <img
                        tabIndex={0}
                        src="/images/ny_sol.PNG"
                        alt="New York"
                        className="lg:h-82 rounded-lg object-cover"
                      />
                      <img
                        tabIndex={0}
                        src="/images/image00013.jpg"
                        className="w-full h-96 object-cover rounded-lg mt-2"
                        alt="woman"
                      />
                    </div>
                    <div>
                      <div className="grid gap-2">
                        <img
                          tabIndex={0}
                          className="h-56 aspect-video rounded-lg object-cover"
                          src="/images/greece.jpeg"
                          alt="greece"
                        />
                      </div>
                      <img
                        tabIndex={0}
                        src="/images/hamock.jpeg"
                        className="lg:w-full lg:h-96 object-cover rounded-lg mt-2"
                        alt="woman"
                      />
                      <img
                        tabIndex={0}
                        src="/images/yellow.jpeg"
                        className="lg:w-full lg:h-60 object-cover rounded-lg mt-2"
                        alt="golden gate bridge"
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 mb-12">
        <h3 className="font-montBold px-6 lg:px-0 text-2xl text-gray-800">
          {' '}
          Enter your details for exclusive offers
        </h3>

        <form className="w-full px-6 lg:px-0" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-8 gap-y-6 mt-8">
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                First Name
              </p>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Last Name
              </p>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Email
              </p>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Cell Number
              </p>
              <input
                type="tel"
                required
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Age
              </p>
              <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                City
              </p>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>{' '}
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Gender
              </p>
              <select
                type="text"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Rather Not Say">Rather Not Say</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Preferences
              </p>
              <select
                type="text"
                required
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="">Select travelling type</option>
                <option value="Solo Traveller">Solo Traveller</option>
                <option value="Couples">Couples/Baecations</option>
                <option value="Group Travel">Group Travel</option>
                <option value="Boys Trips">Boys Trips</option>
                <option value="Girls Trips">Girls Trips</option>
                <option value="All Of The Above">All Of The Above</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Type of holiday
              </p>
              <select
                type="text"
                required
                value={holidayType}
                onChange={(e) => setHolidayType(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="">Select type of holiday</option>
                <option value="City">City</option>
                <option value="Beach">Beach</option>
                <option value="Adventure">Adventure</option>
                <option value="Cruise">Cruise</option>
                <option value="Self-drive Roadtrip">Self-drive Roadtrip</option>
                <option value="Concert">Concert</option>
                <option value="Sport">Sport</option>
                <option value="All Of The Above">All Of The Above</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Have you travelled internationally before?
              </p>
              <select
                type="text"
                required
                value={internationalTravel}
                onChange={(e) => setInternationalTravel(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Dream Destination
              </p>
              <input
                type="text"
                required
                value={dreamDestination}
                onChange={(e) => setDreamDestination(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div className="mx-auto justify-center space-x-4 h-full pt-7 w-full flex items-center">
              <p className="text-base font-medium leading-none text-gray-800">
                Do you have a passport?
              </p>

              {/* Code block starts */}
              <div className="cursor-pointer my-5 rounded-full bg-indigo-700 relative shadow-sm">
                <input
                  checked={passport}
                  onChange={() => setPassport(!passport)}
                  type="checkbox"
                  name="toggle"
                  id="toggle2"
                  className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                />
                <label
                  htmlFor="toggle2"
                  className="toggle-label dark:bg-gray-300 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                />
              </div>
              {/* Code block ends */}
              <style>
                {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #00A1B6;
                    }`}
              </style>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="consent" className="text-xs mb-1">
              By filling in this form I agree to receive marketing material from
              Popp Inn.
            </label>
            <input
              type="checkbox"
              name="consent"
              required
              value={consent}
              onChange={(e) => setConsent(!consent)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ backgroundColor: '#00A1B6' }}
            className="text-white text-sm font-montMedium mt-4 px-6 py-2 min-w-[180px] rounded-md"
          >
            {loading ? 'Loading...' : 'Keep Me Posted'}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Travel;
