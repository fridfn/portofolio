import React from "react"

const BannerAwards = ({ data, handler, index }) => {
  const { title: { one, sec }, description, link, icons: { main, secon } } = data;
  
  return (
   <div className="banner">
    <div className="box-icon">
     <ion-icon className="icon" name={secon}></ion-icon>
    </div>
    <p className="title"><span id="hightlight">{ one }</span>{ sec }</p>
    <p className="description">{ description }</p>
    <div className="information">
     <div className="items">
      <ion-icon name="layers"></ion-icon>
      <p className="description">ChatGPT</p>
     </div>
     <ion-icon
      className="forwards"name={main}
      onClick={() => handler() }>
     </ion-icon>
    </div>
   </div>
  )
}

export default BannerAwards;