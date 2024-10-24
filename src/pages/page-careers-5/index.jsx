import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Header from '@components/Style2/Header';
import Features from '@components/Style2/Careers/Features';
import Images from '@components/Style2/Careers/Images';
import Positions from '@components/Style2/Careers/Positions';
import CareerForm from '@components/Style2/CareerDetails/CareerForm';
import Footer from '@components/Saas/Footer';

const PageCareers = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Careers</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <Header page="careers" title="careers Page" />
        <main className="careers-page style-5 pt-100">
          <Features />
          <Images />
          <Positions />
          <CareerForm />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageCareers;