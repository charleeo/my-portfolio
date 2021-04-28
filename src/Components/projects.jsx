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
    <div className='projects_wrapper'>
      <div className="projects_item" data-aos='fade-right'>
        <img src={process.env.PUBLIC_URL + '/assets/images/kolo-invest.png'} alt="my project"/>
        <div className="projects_btns">
          <a href="#asas" className="projects_btn">
            Kolovest is a savings and investment platform where investors receive a certain percentage as return on investment depending on their investment categor
          </a>
        </div>
      </div>
      <a className='details' href='https://kolovest-netlify.app' target='_blank' rel='noreferrer'><i className="fas fa-eye fa-2x"></i> Details</a>
    </div>
    <div className='projects_wrapper'>
      <div className="projects_item" data-aos='fade-right'>
        <img src={process.env.PUBLIC_URL + '/assets/images/bitpadi.png'} alt="my project"/>
        <div className="projects_btns">
          <p className="projects_btn">
            Bitpadi is a crypto currency trading platform that offers a realtime deposit and witdrawals of crypto currency
          </p>
        </div>
      </div>
      <a className='details' href='https://bitpadi.com' target='_blank' rel='noreferrer'> <i className="fas fa-eye fa-2x"></i> Details </a>
    </div>
    <div className='projects_wrapper'>
      <div className="projects_item" data-aos='fade-right'>
        <img src={process.env.PUBLIC_URL + '/assets/images/fingertip2.png'} alt="my project"/>
        <div className="projects_btns">
          <p className="projects_btn">
            Fingertip is a platform where job seekers and job givers meet. Here the best gigs are given to the top talents
          </p>
        </div>
      </div>
      <a className='details' href='https://fingertip.com.ng' target='_blank' rel='noreferrer'><i className="fas fa-eye fa-2x"></i>  Details</a>
    </div>
    <div className='projects_wrapper'>
      <div className="projects_item" data-aos='fade-right'>
        <img src={process.env.PUBLIC_URL + '/assets/images/propay.png'} alt="my project"/>
        <div className="projects_btns">
          <p  className="projects_btn">
            Propay is a payroll management solution for generating monthly payslips with automatic PAYE calculation base on the Employee's salary and bonuses as well as salary adance and loans
          </p>
        </div>
      </div>
      <a className='details' href='https://payroll.fingertip.com.ng' target='_blank' rel='noreferrer'><i className="fas fa-eye fa-2x"></i> Details</a>
    </div>
  </div>
</section>
  )
}

//tayo@tayo.dev