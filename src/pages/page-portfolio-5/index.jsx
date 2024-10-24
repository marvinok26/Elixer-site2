import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Projects from '@components/Portfolio/Projects';
import Download from '@components/Portfolio/Download';
import Footer from '@components/Saas/Footer';

const PagePortfolio5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Portfolio 5</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="portfolio-page style-1">
          <Projects style="5" />
          <Download style="5" />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PagePortfolio5;