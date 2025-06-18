import React from "react"
import nodejs from "@/assets/logo/nodejs.webp"

const Progress = ({ data, index }) => {
  const { experience, image, percent, tech } = data;
  
  return (
   <div 
    className="progress-container" >
    <div className="progress-box">
     <div className="box-icon">
      <img className="icon" src={image} />
     </div>
     <div className="wrapper-bar">
     <div className="box">
      <p className="title">{tech}</p>
      <p className="percentage">{percent}%</p>
     </div>
     <div className="progress-bar">
      <div 
       className="bar"
       style={{ width: `${percent}%` }}></div>
     </div>
      <p className="description">
       <ion-icon className="icon" style={{ color: 'var(--description-text)'}} name="time"></ion-icon>
       {experience}
      </p>
     </div>
    </div>
   </div>
  )
}

export default Progress;