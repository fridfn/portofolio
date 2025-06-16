import React from "react"

const BannerAwards = ({ data, action, index }) => {
  const { title: { one, sec }, description, link } = data;
  
  return (
   <div className="banner">
    <div className="box-icon">
     <ion-icon className="icon" name="layers"></ion-icon>
    </div>
    <p className="title"><span id="hightlight">{ one }</span>{ sec }</p>
    <p className="description">{ description }</p>
    <div className="information">
     <div className="items">
      <ion-icon name="business"></ion-icon>
      <p className="description">Oct 2022</p>
     </div>
     <ion-icon
      className="forwards"
      name="business"
      onClick={() => {
       action({
         action: "redirect",
         data: link,
         index: index
       }) 
      }}>
     </ion-icon>
    </div>
   </div>
  )
}

export default BannerAwards;