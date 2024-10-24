import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Community from '@components/Contact/Community';
import Form from '@components/Contact/Form';
import Map from '@components/Contact/Map';
import Footer from '@components/App/Footer';

const PageContactApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Contact App</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="contact-page style-5">
          <Community />
          <Form />
          <Map />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageContactApp;