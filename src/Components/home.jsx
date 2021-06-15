import React,{useEffect} from 'react';

import Aos  from 'aos';

const HomePage =()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
   })
  return (
    <>
    <section className='home-page' id='home' data-aos='fade-left'>
       <div className="center">
       <p className='name'>hi! i am <span>Charles Otaru friday</span> </p>
       <p className='drive'>a full stack web applications developer</p>
       </div>
       <div className="image-div">

       </div>
    </section>
    </>
  )
}
export default HomePage