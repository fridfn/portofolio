import React from "react"

const CardsIcons = ({ data }) => {
  const{ icons, total, description } = data;
  return (
   <>
    <div className="cards-icons">
     <ion-icon className="icon" name={ icons }></ion-icon>
     <p className="title">{ total }</p>
     <p className="description">{ description }</p>
    </div>
   </>
  )
}

export default CardsIcons;