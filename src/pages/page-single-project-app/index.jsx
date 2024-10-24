import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import About from '@components/SingleProject/About';
import Challenge from '@components/SingleProject/Challenge';
import Screenshots from '@components/App/Screenshots';
import About2 from '@components/SingleProject/About2';
import Projects from '@components/SingleProject/Projects';
import Footer from '@components/App/Footer';

const PageSingleProjectApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Single Project App</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="single-project pt-50 style-5">
          <About style="4" />
          <Challenge style="4" />
          <Screenshots />
          <About2 style="4" />
          <Projects style="4" />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageSingleProjectApp;