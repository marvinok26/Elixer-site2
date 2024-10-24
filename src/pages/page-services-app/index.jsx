import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Services from '@components/App/Services';
import About from '@components/App/About';
import Testimonials from '@components/App/Testimonials';
import Footer from '@components/App/Footer';

const PageServicesApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Services App</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="services-page style-5">
          <Services />
          <About noFirstContent noIntegration noWave />
          <Testimonials />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageServicesApp;