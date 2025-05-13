import React from "react"

const Banner = ({ data }) => {
  return (
   <div className="banner">
    <div className="box-icon">
     <ion-icon className="icon" name="layers"></ion-icon>
    </div>
    <p className="title"><span id="hightlight">database</span>management</p>
    <p className="description">I can handle your data effectively!</p>
   </div>
  )
}

export default Banner;