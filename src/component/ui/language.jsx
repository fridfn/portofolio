import React from "react"
import flag_usa from "@/assets/flag/united-states.svg"

const Language = ({ data, index }) => {
  const { image, language, description } = data;
  
  return (
   <div 
    className="container-language"
    data-aos-delay={index * 1500}
    data-aos-duration={index * 1000}
    data-aos={index > 3 ? "zoom-in-down" : ""}>
    <div className="box-icon">
     <img src={image} className="image" />
    </div>
    <div className="wrapper">
     <p className="title">{language}</p>
     <p className="description">{description}</p>
    </div>
   </div>
  )
}

export default Language;