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
                    I am a <b> fullstack web developer </b> with passion and drive for elegant and enterprise applications. 
                </p>
                <p data-aos='fade-left'>
                    I believe in a technologically driven <b>World</b> and I am always working and striving to contribute my quota in making the 
                    <b>World</b> a better and more better place through technology 
                </p>
              </section>
  </>
  )
}
export default About