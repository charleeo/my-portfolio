import React,{useState} from 'react';

const Navbar = ()=>{
  const [toggle,setToggle] = useState(false);
  const handleToggle=()=>{
    if(toggle){
      setToggle(false)
    }else{ setToggle(true)}
  }

  const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
   if(window.scrollY >= 90){
     setColorchange(true);
   }
   else{
     setColorchange(false);
   }
};
window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
  <nav className={`${colorChange?"nav":"nav-c"}`} >
    <div className='logo'>COF</div>
    <div className= "links">
      <div className='link-items'><a className="anchors" href ='#home'>Home</a></div>
      <div className='link-items'><a className="anchors" href ='#about'>About</a></div>
      <div className='link-items'><a className="anchors" href ='#project'>projects</a></div>
      <div className='link-items'><a className="anchors" href ='#contact'>contact</a></div>
      <div className='link-items'><a className="anchors" href ='#skills'>skills</a></div>
      <div className='link-items'><a className="anchors" href ='#experiences'>Work History</a></div>
    </div>
    <div className='toggler' onClick={handleToggle}>
      <div className='toggle-bar'></div>
      <div className='toggle-bar'></div>
      <div className='toggle-bar'></div>
    </div>
  </nav>
  <div className= {`hidden-nav ${toggle?'one-opacity':'zero-opacity'}`}>
      <div className='link-items'>
        <a className="anchors" href ='#home' onClick={handleToggle}>Home</a>
      </div>
      <div className='link-items'>
        <a className="anchors" href ='#about' onClick={handleToggle}>About</a>
      </div>
      <div className='link-items'>
        <a className="anchors" href ='#project' onClick={handleToggle}>projects</a>
      </div>
      <div className='link-items'>
        <a className="anchors" href ='#contact' onClick={handleToggle}>contact</a>
      </div>
      <div className='link-items'>
        <a className="anchors" href ='#skills' onClick={handleToggle}>Skills</a>
      </div>
      <div className='link-items'><a className="anchors" onClick={handleToggle} href ='#experiences'>Work History</a></div>
    </div>
  </>
  )
}
export default Navbar;