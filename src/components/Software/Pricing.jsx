import Link from 'next/link';
import plans from '@data/Software/plans.json';

const Pricing = () => {
  return (
    <section className="pricing style-3" data-scroll-index="5">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-4">
              <div className="info">
                <div className="section-head style-3 mb-40">
                  <h3> Affordable <span> Pricing Plans </span></h3>
                </div>
                <small className="text text-gray mb-30">
                  Start your project with a flexible pricing plan designed to meet your business needs. 
                  We take care of the recruitment, hosting, and management, saving you both time and resources.
                </small>
                <small className="text text-gray d-block">
                  Don't see a plan that fits? Need a custom solution? <br /> 
                  <a href="#" className="color-blue2 text-decoration-underline">Contact us</a> for a personalized pricing plan today!
                </small>
                <Link href="/page-services-5">
                  <a className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                    <span>View Our Services</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="price-cards">
                <div className="row">
                  {
                    plans.map((plan, i) => (
                      <div className="col-lg-6" key={i}>
                        <div className={`pricing-card ${plan.recommended ? 'dark-card':''} style-3 mb-30 mb-lg-0`}>
                          <div className="card-head">
                            <div className="title">
                              <h4>{ plan.title } { plan.recommended && <small>Recommended</small> }</h4>
                              <small>{ plan.description }</small>
                            </div>
                            <div className="price">
                              <h5>{ plan.price }</h5>
                              <small>per month</small>
                            </div>
                          </div>
                          <div className="card-body">
                            <ul>
                              {
                                plan.features.map((feature, i) => (
                                  <li key={i}>
                                    <i className="bi bi-check"></i>
                                    <small>{ feature }</small>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                          <Link href="/page-contact-5">
                            <a className="btn rounded-pill bg-blue2 sm-butn w-100 text-white">
                              <span>Get Started Now</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/img/testimonials/testi3_lines.png" alt="Testimonials Lines Graphic" className="testi_lines w-100" />
        </div>
      </div>
    </section>
  )
}

export default Pricing;
