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
import Footer from '@components/App/Footer';

const PageBlogAppWide = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Elixerr - Blog App Wide</title>
      </Head>

      <MainLayout>
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-4">
          <BlogSlider />
          <PopularPosts />
          <AllNews isWide />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageBlogAppWide;