import React,{useEffect} from 'react';

import  Aos  from 'aos';

const About=()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
   })
  return(
  <>
              <section className="about_bio" id='about'>
                <h2>Bio</h2>
                <p data-aos='fade-up'>
                I am a software developer with over 3 years of experience in developing enterprise solutions. 
                </p>
                <p>
                My skills set are in PHP, Laravel, Node.JS, MySQL and React. I have worked in both start-up environments as well as some large corporate organizations and this has given me the needed experience in telling users’ story and also transforming same into real projects. I love to work in a team but can also work in isolation and still deliver good results.
                </p>
              </section>
  </>
  )
}
export default About