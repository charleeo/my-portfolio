import React,{useEffect} from 'react';
import Aos from 'aos'

export const Project = ()=>{
  useEffect(()=>{
    Aos.init({duratio:2000})
  })
  return(
    <section className="projects" data-aos='fade-down'>
    <div className="projects-details">
      <div className="project-image">
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/kolo-invest.png'} alt="my project"/>
      <small><a href="https://kolovest.netlify.app" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>
      <p>
         <b>Kolo Vest</b> is a savings platform where you can make either daily, weekly, monthly savings. After a period of time, you get a percentage return on investment(ROI) plus your capital.
       </p>
       
      <p>
        The Bronze category option simply requires you to save your money and also have the ability to withdraw it at anytime of choice, while, the Silver option, you save for a fixed period of time(six months) minimum and you get up to 10 percent for your return on investment (ROI). For the GOLD plan, you get 15% return on investment(ROI) for a perion of 8 month
      </p>
      </div>
      <div className="developer-role">
        <h3>Technical Stacks Used</h3>
        <div className="tools-roel">
        <ul className='tools'>
          <li>NODE JS</li>
          <li>EXPRESS JS</li>
          <li>MYSQL</li>
          <li>PAYMENT APIs</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>JSX</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>BOOTSTRAP</li>
        </ul>
        <div className="role">
          <h2>ROLE</h2>
          <p>FULL STACK DEVELOPMENT</p>
        </div>
        </div>
      </div>
    </div>

    <div className="projects-details">
      <div className="project-image">
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/fingertip2.png'} alt="my project"/>
      <small><a href="https://kolovest.netlify.app" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>
      <p>
        JOBS KONET is a platform where <b>Employers and Employees</b> meet. On this platform, awsome and well paying gigs are given to those awsome developers
      </p>
      </div>
      <div className="developer-role">
        <h3>Technical Stacks Used</h3>
        <div className="tools-roel">
        <ul className='tools'>
          <li>PHP</li>
          <li>LARAVEL</li>
          <li>MYSQL</li>
          <li>BLADE TEMPLATE</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>BOOTSTRAP</li>
        </ul>
        <div className="role">
          <h2>ROLE</h2>
          <p>FULL STACK DEVELOPMENT</p>
        </div>
        </div>
      </div>
    </div>

    <div className="projects-details">
      <div className="project-image">
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/bitpadi.png'} alt="my project"/>
      <small><a href="https://bitpadi.com" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>       
      <p>
        BITPADI is a crypto currency trading platform where <b>p2p</b> trading and <b>ESCROW</b> services are rendered
      </p>
      </div>
      <div className="developer-role">
        <h3>Technical Stacks Used</h3>
        <div className="tools-roel">
        <ul className='tools'>
        <li>PHP</li>
          <li>LARAVEL</li>
          <li>MYSQL</li>
          <li>BLADE TEMPLATE</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>BOOTSTRAP</li>
          <li>THRESH0LD API</li>
        </ul>
        <div className="role">
          <h2>ROLE</h2>
          <p>CRYPTO CURRENCY API INTEGRATION</p>
        </div>
        </div>
      </div>
    </div>

    <div className="projects-details">
      <div className="project-image">
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/fingertip2.png'} alt="my project"/>
      <small><a href="https://kolovest.netlify.app" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>
      <p>
        JOBS KONET is a platform where <b>Employers and Employees</b> meet. On this platform, awsome and well paying gigs are given to those awsome developers
      </p>
      </div>
      <div className="developer-role">
        <h3>Technical Stacks Used</h3>
        <div className="tools-roel">
        <ul className='tools'>
          <li>PHP</li>
          <li>LARAVEL</li>
          <li>MYSQL</li>
          <li>BLADE TEMPLATE</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>BOOTSTRAP</li>
        </ul>
        <div className="role">
          <h2>ROLE</h2>
          <p>FULL STACK DEVELOPMENT</p>
        </div>
        </div>
      </div>
    </div>

    <div className="projects-details">
      <div className="project-image">
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/folio.png'} alt="my project"/>
      <small><a href="https://charleeo.netlify.app" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>       
      <p>
        This is a brief descripion about charles
      </p>
      </div>
      <div className="developer-role">
        <h3>Technical Stacks Used</h3>
        <div className="tools-roel">
        <ul className='tools'>
          <li>REACT</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
        </ul>
        <div className="role">
          <h2>ROLE</h2>
          <p>FULL STACK DEVELOPMENT</p>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}
