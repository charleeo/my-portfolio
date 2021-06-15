import React from 'react';


export const Project = ()=>{
  
  return(
    <section className="projects">
      <h1>PRIVATE PROJECTS</h1>
    <div className="projects-details">
      <div className="project-image">
        <h2>KOBO CASH</h2>
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/kolo-invest.png'} alt="my project"/>
      <small><a href="https://kolovest.netlify.app" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>
      <p>
         <b>Kobo Cash</b> is a savings platform where you can make either daily, weekly, monthly savings. After a period of time, you get a percentage return on investment(ROI) plus your capital.
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
        <h2>AFRICA SHOPPING MALLS</h2>
      <img className='img' src={process.env.PUBLIC_URL + '/assets/images/asm.png'} alt="my project"/>
      <small><a href="https://africstac.com" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>
      <p>
        <b>AFRICA SHOPPING MALLS </b>, is a multi-vendor online shopping that helps connect sellers with buyers all over <b>AFRICA</b>
        The system is developed in such a way that those that wish to sell but can't afford a store rental can simply display their goods and services on the platform for  the view of their potential clients and customers
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
        <h2>BIT PADI</h2>
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
        <h2>MY PROFILE</h2>
        <img className='img' src={process.env.PUBLIC_URL + '/assets/images/folio.png'} alt="my project"/>
        <small><a href="https://charles.africstac.com" target="_blank" rel="noopener noreferrer">Details</a></small>
      </div>
      <div className='project-about'>
        <h2>Decription</h2>       
        <p >
          I am a software developer with 2+ years of experience in developing enterprise solutions. 
        </p>
        <p>
          My skills set are in PHP, Laravel, Node.JS, MySQL and React. I have worked in both start-up environments as well as some large corporate organizations and this has given me the needed experience in telling users’ story and also transforming same into real projects. I love to work in a team but can also work in isolation and still deliver good results.
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
