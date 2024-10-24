import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Header from '@components/Style2/Header';
import Details from '@components/Style2/ServicesDetails/Details';
import Contact from '@components/Style2/ServicesDetails/Contact';
import Footer from '@components/Saas/Footer';

const PageServiceDetails = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Service Details</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <Header page="Service Details" title="Email Marketing" />
        <main className="services-details-page style-5">
          <Details />
          <Contact />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageServiceDetails;