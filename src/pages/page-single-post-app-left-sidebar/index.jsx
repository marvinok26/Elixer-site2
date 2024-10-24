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
import Footer from '@components/App/Footer';

const PageSinglePostLeftSidebarApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Single Post App Left Sidebar</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-4">
          <AllNews leftSidebar />
          <PopularPosts />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageSinglePostLeftSidebarApp;