import React,{useEffect} from 'react';
import Aos from 'aos'

const Skills =()=>{
  useEffect(()=>{
   Aos.init({duration:2000})
  })
  return(
    <section className="skills"id='skills' data-aos='fade-up'>
       <h5 style={{textAlign:"center", color:'#000'}}>SKILLS</h5>  <hr/>
      <div className="skills-label" data-aos="fade-left">
        <div className="label-percent ">
          <label htmlFor="html">html5</label>
          <span>90%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='html' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-right">
        <div className="label-percent ">
          <label htmlFor="css3">css</label>
          <span>80%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='css3' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-right">
        <div className="label-percent ">
          <label htmlFor="css3">bootstrap</label>
          <span>80%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='css3' className="inputs" />
        </div>
      </div>

     
      <div className="skills-label" data-aos="fade-left">
        <div className="label-percent javascript">
          <label htmlFor="javaScript">JavaScript</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='javascript' className="inputs"/>
        </div>
      </div>


      <div className="skills-label" data-aos="fade-right">
        <div className="label-percent ">
          <label htmlFor="Jquery">JQuery</label>
          <span>60%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='jquery' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-left">
        <div className="label-percent ">
          <label htmlFor="react">React</label>
          <span>60%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='react' className="inputs" />
        </div>
      </div>



      <div className="skills-label">
        <div className="label-percent ">
          <label htmlFor="mysql">mysql</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='mysql' className="inputs" />
        </div>
      </div>

      <div className="skills-label">
        <div className="label-percent ">
          <label htmlFor="posgresql">postgresql</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='posgresql' className="inputs" />
        </div>
      </div>

      <div className="skills-label">
        <div className="label-percent ">
          <label htmlFor="mongodb">mongodb</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='mongodb' className="inputs" />
        </div>
      </div>

      <div className="skills-label">
        <div className="label-percent ">
          <label htmlFor="orm">ORM</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='orm' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-left">
        <div className="label-percent ">
          <label htmlFor="php">php</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='php' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-left">
        <div className="label-percent ">
          <label htmlFor="laravel">laravel</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='laravel' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-right">
        <div className="label-percent ">
          <label htmlFor="node">node js</label>
          <span>60%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='node' className="inputs" />
        </div>
      </div>

      <div className="skills-label">
        <div className="label-percent ">
          <label htmlFor="express">express js</label>
          <span>70%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='express' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-right">
        <div className="label-percent ">
          <label htmlFor="rest">restful services(APIs)</label>
          <span>60%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='rest' className="inputs" />
        </div>
      </div>

      <div className="skills-label" data-aos="fade-left">
        <div className="label-percent ">
          <label htmlFor="git">vesrsion control(git)</label>
          <span>80%</span>
        </div>
        <div className="inputs-wrapper">
          <input type="rang"  id='git' className="inputs" />
        </div>
      </div>






    </section>
  )
}
export default Skills
