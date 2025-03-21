import React from "react"
import Rocket from "@/component/animate/rocket"

const LogoIcons = () => {
  return (
   <div className="box-logo">
    <Rocket />
   </div>
  )
}


const TitleDescription = ({ icons }) => {
  return (
   <div className='sub-content'>
    <p className='title'><span id='hightlight'>A little bit</span> about me</p>
    <div className='content'>
     {icons ? (<LogoIcons />) : (null)}
     <div className='box-description'>
      <p className='description'>
       I’m a FrontEnd Developer with <b>over a decade</b> of experience, specializing in backend development with some frontend work as well. I also have hands-on experience with HTML5, CSS3, JavaScript, and NodeJs in production environments.
       <br></br>
       <br></br>
       This diverse background gives me the flexibility to adapt to a wide range of project needs.
       <br></br>
       <br></br>
       I look forward to collaborating <b>with you!</b>
      </p>
     </div>
    </div>
   </div>
  )
}

export default TitleDescription;