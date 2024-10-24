import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import AllNews from '@components/SinglePost/AllNews';
import PopularPosts from '@components/SinglePost/PopularPosts';
import Footer from '@components/Saas/Footer';

const PageSinglePost5Wide = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Single Post Wide</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-5">
          <AllNews style="5" isWide />
          <PopularPosts />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageSinglePost5Wide;