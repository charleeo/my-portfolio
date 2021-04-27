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
                    Charles Otaru is a tech ardent, an avid information seeker and a change 
                    maker.
                    He is one of those who hold the believe that 'advancement in technology alone does not result in a better world but a mindset for singleness in vision towards a better and a changed world combine with technology can help better the world'.
                </p>
                <hr/>
                <p data-aos='fade-down'>
                    He studied Civiv Engineering From the prestigious polytechniques 'uchi
                    Polytechnic but his quest for technology and the desire to be part of 
                    the world tech change maker, he started a new career as web develper. <br/>
                </p>

              </section>
  </>
  )
}
export default About