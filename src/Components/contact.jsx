import React from 'react';

export const Contact = ()=>{
  return(
    <section className="contact" id='contact'>
          <h2>get in touch</h2>
           <div className="contact_list">
             <div className="contact_email">               
               <div className="text-secondary">
               <i className="fas fa-envelope"></i>Email: charleeotaru@gmail.com
                </div>
             </div>
             <hr/>
             <div className="contact_phone">
               <div className="text-secondary">
               <i className="fas fa-mobile-alt"></i>Phone: +2347053652698
                </div>
             </div> 
             <hr/>
             <div className="contact_addrress">
               
               <div className="text-secondary">
               <i className="fas fa-marker-alt"></i>Address: 15, Mercy Close, Olori, Akute
                 </div>
             </div>
           </div>
        </section>
  )
}

