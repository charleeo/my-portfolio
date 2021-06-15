import React from 'react';

export const Contact = ()=>{
  return(
    <section className="contact" id='contact'>
          <h2>get in touch</h2>
           <div className="contact_list">
             <div className="contact_email">               
               <div className="text-secondary">
               <a href="mailto:charleeotaru@gmail.com" style={{color:'#fff'}}>
                <i className="fas fa-envelope"></i> charleeotaru@gmail.com
                </a>
                </div>
             </div>
             <hr/>
             <div className="contact_phone">
               <div className="text-secondary">
                <a href="tel:+2347053652698" style={{color:'#fff'}}>
               <i className="fas fa-mobile-alt"></i> +2347053652698
                </a>
                </div>
             </div> 
             <hr/>
             <a href="https://www.github.com/charleeo"
             style={{color:'#fff'}}>
                Github
              </a>
              <hr/>
             <div className="contact_addrress">
               
               <div className="text-secondary">
               <i className="fas fa-map-marker"></i> 15, Abrahim Akowajon Street, Olori-Baale, Akute, Ojodu-Berger, Lagos State, Nigeria.     
                 </div>
             </div>
           </div>
        </section>
  )
}

