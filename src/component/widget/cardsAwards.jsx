import React from "react"
import Avatar from "@/component/ui/avatar"
import BubbleSelected from "@/component/ui/bubbleSelected"

const CardsAwards = ({ data }) => {
  const { name, image, year, type, stack, description, icons, highlight } = data;
  
  return (
   <div className="cards-awards">
    <div className="experience-header-title">
     <p className="title">
      { name }
     </p>
     <p id="hightlight">
      -{ highlight }
     </p>
     <span>
      <div className="items">
       <ion-icon name={ icons }></ion-icon>
       <p className="description">{ type }</p>
      </div>
      { year ? (
      <div className="items">
       <ion-icon name={ icons }></ion-icon>
       <p className="description">{ year }</p>
      </div>) : ( null )}
     </span>
    </div>
    <div className="experience-description">
     <p className="description">{ description }</p>
    </div>
   </div>
  )
}

export default CardsAwards;