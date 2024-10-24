import Link from 'next/link';
import aboutData from '@data/Software/about.json';

const About = () => {
  return (
    <section className="about section-padding style-3" data-scroll-index="3">
      <div className="top-content">
        <div className="img img-left">
          {/* Improved alt text */}
          <img src="/assets/img/about/style_3_1.png" alt="About Elixerr - IT Solutions and Digital Services" />
          {
            aboutData.numbers.map((number, index) => (
              <div className="info-circle" key={index}>
                <div className="cont">
                  <h2>{ number.value }</h2>
                  <small>{ number.title }</small>
                </div>
              </div>
            ))
          }
        </div>
        <div className="container">
          <div className="row gx-0 justify-content-end">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head long-shape mb-40 style-3">
                  <h3>Elixerr’s <span>Mission & Vision</span></h3>
                </div>
                {/* Updated vision statement with relevant keywords */}
                <h5 className="h5">
                  “Technology’s true power is revealed when everything works seamlessly.”
                </h5>
                <div className="text mb-20">
                  Elixerr Co is the trusted partner for leading enterprises, SMEs, and tech innovators worldwide. 
                  We enhance business value through custom software development, product design, quality assurance, 
                  and strategic IT consultancy services.
                </div>
                <div className="text mb-70">
                  Specializing in IT solutions such as product engineering, cloud computing, and warranty management, 
                  Elixerr is dedicated to driving innovation and delivering robust technological solutions.
                </div>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill bg-blue2 sm-butn text-white">
                    <span>More About Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btm-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="info pe-lg-5">
                <div className="section-head mb-40 style-3">
                  <h3>Elixerr’s <span>Technology</span></h3>
                </div>
                <div className="text mb-30">
                  Our team helps transform businesses using the latest technologies to stay ahead in today's competitive landscape.
                </div>
                <ul>
                  {
                    aboutData.features.map((feature, index) => (
                      <li key={index}> 
                        <i className="bi bi-star-fill me-3"></i> { feature }
                      </li>
                    ))
                  }
                </ul>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                    <span>How We Work</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="img img-right">
          {/* Improved alt text */}
          <img src="/assets/img/about/style_3_2.png" alt="Elixerr - Innovation in IT and Digital Solutions" />
        </div>
      </div>
    </section>
  )
}

export default About;
