import React from 'react';

const Footer = ()=>{
  return (
    <>
<div className="social-icons">
    <a href="https://www.linkedin.com/in/charleeo">
        <i className="fa fa-linkedin fa-2x"></i>
    </a>
    <a href="https://www.facebook.com/charlee Otaru">
        <i className="fa fa-facebook fa-2x"></i>
    </a>
    <a href="https://www.github.com/charleeo">
        <i className="fab fa-github fa-2x"></i>
    </a>
</div>
      <footer>&copy; copyright &nbsp; &nbsp; {new Date().getFullYear()} Charles Otaru</footer>
</>
  )
}

export default Footer;