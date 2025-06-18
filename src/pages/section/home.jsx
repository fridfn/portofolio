import React from "react"
import metadata from "@/metadata"
import TitleDescription from "@/component/ui/titleDescription"

const Homes = () => {
  const INTEREST_CARDS = metadata.personal.interests
  const DATA_CLIENTS = metadata.personal.reviews;
  const DESCRIPTION = metadata.personal.about
  
  const { title: { highlight, normal }, description } = DESCRIPTION
  
  return (
   <div 
    id="introduction"
    className="wrapper-section"
    data-aos="zoom-in-down"
    data-aos-duration="400">
    <span className="greeting">
     <p className="title" id="hightlight">Welcome!</p>
     <p className="info"><ion-icon name="business"></ion-icon>Kediri
      <span>&#9866;</span>ID<span>•</span><ion-icon name="mail" style={{color: "var(--secondary-hightlight)"}}></ion-icon><a style={{color: "var(--secondary-hightlight)!important"}} href="mailto:faridfathonin@gmail.com">faridfathonin@gmail.com</a>
     </p>
    </span>
    <TitleDescription 
      icons={true} type="description" data={description}
      title={{
       highlight: highlight,
       normal: normal
      }}
    />
    <TitleDescription 
      title={{
       highlight: "Clients ", 
       normal: "Reviews"
      }}
      icons={false} type="carousel" 
    />
    <TitleDescription 
      title={{
       highlight: "Personal ", 
       normal: "interests"
      }}
      count={INTEREST_CARDS}
      icons={false} type="cards" 
    />
   </div>
  )
}

export default Homes;