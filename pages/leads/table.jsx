/* eslint-disable @next/next/no-img-element */
import React from 'react';
import supabase from '../../lib/supabase';

const Table = ({ leads }) => {
  return (
    <div>
      <div className="container mx-auto px-6 py-10">
        <div className="sm:shadow rounded bg-gray-800">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="xl:w-full w-11/12 mx-auto flex flex-wrap items-center justify-between px-8 mb-2 xl:mb-0 lg:mb-0 border-b  border-gray-700"
            >
              <div className="xl:w-1/5 py-5 text-white">
                <div className="flex flex-col justify-center ">
                  <p className="text-lg  text-gray-100  font-normal">
                    {`${lead.firstName} ${lead.lastName}`}
                  </p>
                  <div className=" flex space-x-2 text-xs">
                    <span>
                      Passport: {lead.internationalTravel ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/5 py-5 flex flex-col text-white">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <p className="text-xs text-gray-200 pl-2 font-normal">
                    {lead.email}
                  </p>
                </div>
                <p className="text-xs">Number: {lead.cellphone}</p>
                <div className="flex items-center">
                  <span className="text-xs">{lead.city}</span>
                </div>
              </div>
              <div className="xl:w-1/5 py-5">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-200 pl-2 font-normal">
                    {lead.gender}
                  </p>
                  <p className="text-sm text-gray-200 pl-2 font-normal">
                    Age:{lead.age}
                  </p>
                </div>
              </div>
              <div className="xl:w-1/5 py-5">
                <div className="flex flex-col items-center text-white">
                  <span className="text-xs">{lead.preferences}</span>
                  <p className="text-sm text-gray-200 pl-2 font-normal">
                    Holiday Type: {lead.holidayType}
                  </p>
                  <p className="text-sm text-gray-200 pl-2 font-normal">
                    Dream Destination: {lead.dreamDestination}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;

export async function getServerSideProps({ req }) {
  let { data: leads, error } = await supabase.from('leads').select('*');

  return {
    props: {
      leads,
    },
  };
}
