import React,{useEffect} from 'react';

import Aos  from 'aos';

const HomePage =()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
   })
  return (
    <>
    <section className='home-page' id='home' data-aos='fade-left'>
       <p className='name'>hi! i am <span>Charles Otaru friday</span> </p>
       <div className="center">
       <p className='profession'>a proffessional software developer</p>
       <p className='drive'>a techprenure with a passion for inovations and creativity</p>
       </div>
    </section>
    </>
  )
}
export default HomePage