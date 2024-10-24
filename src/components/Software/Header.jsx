const Header = () => {
  return (
    <header className="style-3 overflow-hidden" data-scroll-index="0">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                {/* Improved headline with more SEO-friendly terms */}
                <h1 className="h1">Boost your business growth with <span>Elixerr</span></h1>
                {/* Added keywords for SEO */}
                <p className="p">
                  We empower businesses by providing tailored solutions in custom software development, 
                  product design, quality assurance, and comprehensive digital marketing services.
                </p>
                <h5 className="h5">Get a Free Quote! <span className="fw-normal ms-1">We’ll contact you within 24 hours.</span></h5>
                
                <form action="contact.php" className="form mt-30" method="post">
                  <div className="row gx-3">
                    <div className="col-6">
                      <div className="form-group input-with-icon">
                        <input type="text" className="form-control" placeholder="Your Email *" />
                        <span className="input-icon"><i className="far fa-envelope"></i></span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <select className="form-select" defaultValue={"Your inquiry about"}>
                          <option value="">Your inquiry about</option>
                          <option value="">Custom Software Development</option>
                          <option value="">Digital Marketing Services</option>
                          <option value="">IT Solutions & Consulting</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn dark-butn hover-darkBlue rounded-pill w-100 mt-3">
                        <span>Request A Consultation</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-img">
        {/* Added SEO-friendly alt text for all images */}
        <img src="/assets/img/header/header_3.png" alt="Custom software development and digital marketing solutions" className="pattern" />
        <img src="/assets/img/header/header_3_c.png" alt="Decorative circle design" className="circle" />
        <img src="/assets/img/header/logo_sh_l.png" alt="Elixerr logo shape" className="logo_shap" />
      </div>
    </header>
  )
}

export default Header;
