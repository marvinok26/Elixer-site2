import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import BlogSlider from '@components/Blog/BlogSlider';
import PopularPosts from '@components/Blog/PopularPosts';
import AllNews from '@components/Blog/AllNews';
import Footer from '@components/Saas/Footer';

const PageBlog5LeftSidebar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Blog Left Sidebar</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-5">
          <BlogSlider style="5" />
          <PopularPosts style="5" />
          <AllNews leftSidebar style="5" />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageBlog5LeftSidebar;