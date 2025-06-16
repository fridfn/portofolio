import React from "react"

const Banner = ({ data }) => {
  const { title: { one, sec }, description, icons } = data;
  
  return (
   <div className="banner">
    <div className="box-icon">
     <ion-icon className="icon" name={icons} ></ion-icon>
    </div>
    <p className="title"><span id="hightlight">{one}</span>{sec}</p>
    <p className="description">{description}!</p>
   </div>
  )
}

export default Banner;