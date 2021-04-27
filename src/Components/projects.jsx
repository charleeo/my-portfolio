import React,{useEffect} from 'react';
import Aos from 'aos'

export const Project = ()=>{
  useEffect(()=>{
    Aos.init({duratio:2000})
  })
  return(
    <section className="projects" id='project'>
    <div className="projects_bio-image">
      <h1 className="text-secondary">My Projects</h1>
    </div>
    <div className="projects_items" data-aos='fade-down'>
      <div className="projects_item">
        <img src={process.env.PUBLIC_URL + '/assets/images/kolo-invest.png'} alt="propay"/>
        <div className="projects_btns">
          <a href="https://kolovest.netlify.app" target="_blank"  rel='noreferrer' className="projects_btn">
            <i className="fas fa-eye fa-2x"></i>Preview
          </a>
          <a href="https://github.com/charleeo/d-save" className="projects_btn">
            <i className="fab fa-github fa-2x"></i>Github
          </a>
        </div>
      </div>
      <div className="projects_item" data-aos='fade-left'>
        <img src={process.env.PUBLIC_URL + '/assets/images/bitpadi.png'} alt="my project"/>
        <div className="projects_btns">
          <a href="https://bitpadi.com" className="projects_btn">
            <i className="fas fa-eye fa-2x"></i>Preview
          </a>
          <a href="https://github.com/charleeo/job-links" className="projects_btn">
            <i className="fab fa-github fa-2x"></i>Github
          </a>
        </div>
      </div>
      <div className="projects_item" data-aos='fade-right'>
        <img src={process.env.PUBLIC_URL + '/assets/images/fingertip2.png'} alt="my project"/>
        <div className="projects_btns">
          <a href="#asas" className="projects_btn">
            <i className="fas fa-eye fa-2x"></i>Preview
          </a>
          <a href="https://fingertip.com.ng" target="_blank"  rel='noreferrer' className="projects_btn">
            <i className="fab fa-github fa-2x"></i>Github
          </a>
        </div>
      </div>
      <div className="projects_item" data-aos='fade-up'>
        <img src={process.env.PUBLIC_URL + '/assets/images/propay.png'} alt="my project"/>
        <div className="projects_btns">
          <a href="#asas" className="projects_btn">
            <i className="fas fa-eye fa-2x"></i>Preview
          </a>
          <a href="https://propay.fingertip.com.ng" className="projects_btn">
            <i className="fab fa-github fa-2x"></i>Github
          </a>
        </div>
      </div>
    </div>
      
</section>
  )
}