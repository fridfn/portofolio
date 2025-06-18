import React from "react"
import EachUtils from "@/utils/EachUtils"
import Avatar from "@/component/ui/avatar"
import BubbleSelected from "@/component/ui/bubbleSelected"

const CardsAwards = ({ data }) => {
  const { title: { one, sec } , image, year, type, stack, description, icons, highlight } = data;
  
  return (
   <div className="cards-awards">
    <div className="experience-header-title">
    <p className="title"><span id="hightlight">{one} </span>{sec}</p>
     { type || year && (<span>
     { type && (<EachUtils
      of={type}
      render={(value, index) => (
       <div className="items" key={index}>
         <ion-icon name={ icons }></ion-icon>
         <p className="description">{ value }</p>
       </div>
      )}/>)}
      { year && (
      <div className="items">
       <ion-icon name={ icons }></ion-icon>
       <p className="description">{ year }</p>
      </div>)}
     </span>)}
    </div>
    <div className="experience-description">
     <p className="description">{ description }</p>
    </div>
   </div>
  )
}

export default CardsAwards;