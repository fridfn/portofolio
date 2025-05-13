import React from "react"

const BannerAwards = ({ data }) => {
  return (
   <div className="banner">
    <div className="box-icon">
     <ion-icon className="icon" name="layers"></ion-icon>
    </div>
    <p className="title"><span id="hightlight">database</span>management</p>
    <p className="description">I can handle your data effectively!</p>
    <div className="information">
     <div className="items">
      <ion-icon name="business"></ion-icon>
      <p className="description">Oct 2022</p>
     </div>
     <ion-icon className="forwards" name="business"></ion-icon>
    </div>
   </div>
  )
}

export default BannerAwards;