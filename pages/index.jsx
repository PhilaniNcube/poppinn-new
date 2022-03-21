import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Slides from '../components/Slides';
import HomeSectionOne from '../components/HomeSectionOne';
import Bryanston from '../components/Bryanston';
import HomeSectionTwo from '../components/HomeSectionTwo';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <Fragment>
      <Slides />
      <HomeSectionOne />
      <Bryanston />
      <HomeSectionTwo />
      <ContactForm />
    </Fragment>
  );
}
