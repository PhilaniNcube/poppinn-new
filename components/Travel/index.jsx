import React, { Fragment } from 'react';
import styles from './Travel.module.css';

const index = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-800 font-montExtraBold">
              Popp Inn Travel
            </h1>
            <p className="text-xl md:text-2xl mt-3 place-self-start">
              The world is your playground
            </p>
          </div>
        </div>
        <div className={styles.circle}></div>
      </div>
    </Fragment>
  );
};

export default index;
