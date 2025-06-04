import React from "react"
import Avatar from "@/component/ui/avatar"
import EachUtils from "@/utils/EachUtils"
import BubbleSelected from "@/component/ui/bubbleSelected"

const CardsProject = ({ data }) => {
  const { name, icons, image, type, stack, link, description } = data;
  
  return (
   <div className="cards-project">
    <div className="experience-header-title">
     <p className="title">
      { name }
     </p>
     <span>
      <div>
       <ion-icon name="business"></ion-icon>
       <p className="description">{ type }</p>
      </div>
      <div className="list">
       <EachUtils
        of={stack}
        render={(value, index) => (
         <BubbleSelected data={value} key={index} />
        )}/>
      </div>
     </span>
     <Avatar name={image} />
    </div>
    <div className="experience-description">
     <p className="description">{ description }</p>
    </div>
    <div className="media-social">
     <span>
     <EachUtils
       of={icons}
       render={(value, index) => (
        <ion-icon 
          key={index}
          name={value}
          className="icon"
          onClick={() => window.location.href = link?.[index]}>
        </ion-icon>
       )}/>
     </span>
      <ion-icon className="icon" name="camera"></ion-icon>
    </div>
   </div>
  )
}

export default CardsProject;