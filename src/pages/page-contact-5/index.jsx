import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Form from '@components/Contact/Form';
import Map from '@components/Contact/Map';
import Footer from '@components/Saas/Footer';

const PageContact5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Contact</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="contact-page style-5">
          <Form style="5" />
          <Map />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageContact5;