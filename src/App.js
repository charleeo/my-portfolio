import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/about';
import { Contact } from './Components/contact';
import Footer from './Components/footer';
import HomePage from './Components/home';
import Navbar from './Components/NavBar';
import Skills from './Components/skills';
import 'aos/dist/aos.css'
import { Project } from './Components/projects';
import { Experiences } from './Components/experience';

const App=()=>{

  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
         <Route to='/' exact>
           <HomePage/>
         </Route>
      </Switch>
      <Skills/>
      <Experiences/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
