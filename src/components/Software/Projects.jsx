import Link from 'next/link';
import projects from '@data/Software/projects.json';

const Projects = () => {
  return (
    <section className="projects section-padding style-3" data-scroll-index="4">
      <div className="container">
        <div className="section-head style-3 text-center">
          <h3>Our Featured <span>IT & Software Projects</span></h3> {/* Added more keywords relevant to the company */}
        </div>
        <div className="content">
          <div className="row">
            {
              projects.map((project, i) => (
                <div className={i === 0 ? 'col-lg-7' : i === 1 ? 'col-lg-5' : 'col-lg-6'} key={i}>
                  <div className="project-card d-block mb-30 style-3">
                    <Link href="/page-single-project-5">
                      <a className="img img-cover d-block">
                        <img src={project.image} alt={`${project.title} - ${project.description}`} /> {/* Updated alt text for better SEO */}
                      </a>
                    </Link>
                    <div className="info">
                      <h5 className="h5"><Link href="/page-single-project-5"><a>{ project.title }</a></Link></h5>
                      <small className="small"><a href="#">{ project.description }</a></small> {/* Keywords included in project descriptions */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="text-center">
            <Link href="/page-portfolio-5">
              <a className="btn rounded-pill bg-blue2 sm-butn mt-60 text-white">
                <span>View Full Portfolio</span> {/* Updated text for better CTA and SEO */}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
