import Link from 'next/link';
import footerData from '@data/Software/footer.json';

const Footer = () => {
  return (
    <footer className="style-3">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                Elixerr - Your IT & Software Partner
              </div>
              <small className="text">
                With over 25 years of experience in IT services, we create software and mobile apps for clients worldwide. We offer custom IT solutions for your industry needs.
              </small>
              <div className="social-icons mt-3">
                <a href="#" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                Contact Info
              </div>
              <small className="text mb-10 d-block">
                { footerData.address }
              </small>
              <small className="text mb-10 d-block">
                { footerData.phone }
              </small>
              <small className="text d-block">
                { footerData.email }
              </small>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">
                Quick Links
              </div>
              <ul>
                {
                  footerData.usefulLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link}>
                        <a>{ item.title }</a>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">
                Our Services
              </div>
              <ul>
                {
                  footerData.services.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link}>
                        <a>{ item.title }</a>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="logo">
                <img src="/assets/img/logo_11.png" alt="Elixerr Logo" />
              </div>
            </div>
            <div className="col-lg-6">
              <small className="small">
                © 2022 Elixerr Ltd. All Rights Reserved. Designed by <a href="#" className="fw-bold text-decoration-underline">Marvin</a>
              </small>
            </div>
          </div>
          <img src="/assets/img/testimonials/testi3_lines.png" alt="" className="testi_lines w-100" />
        </div>
      </div>
      <img src="/assets/img/contact_globe.svg" alt="" className="contact_globe" />
    </footer>
  )
}

export default Footer;
