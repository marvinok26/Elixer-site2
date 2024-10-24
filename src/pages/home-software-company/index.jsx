import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/SoftwareNav';
import Header from '@components/Software/Header';
import Testimonials from '@components/Software/Testimonials';
import Services from '@components/Software/Services';
import About from '@components/Software/About';
import Projects from '@components/Software/Projects';
import Pricing from '@components/Software/Pricing';
import Team from '@components/Software/Team';
import Blog from '@components/Software/Blog';
import ChatBanner from '@components/Software/ChatBanner';
import Footer from '@components/Software/Footer';

const HomeSoftwareCompany = () => {
  return (
    <>
      <Head>
        <title>Elixerr - Software Development and Digital Marketing Company</title>
      </Head>

      <MainLayout>
        <Navbar />
        <Header />
        <main>
          <Testimonials />
          <Services />
          <About />
          <Projects />
          <Pricing />
          <Team />
          <Blog />
          <ChatBanner />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeSoftwareCompany;