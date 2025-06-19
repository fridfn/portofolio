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
     <div className="wrapper-content">
      <p className="title"><span id="hightlight">A litle bit</span>about me</p>
       <TitleDescription 
         icons="rocket" type="description" data={description}
       />
    </div>
    <div className="wrapper-content">
     <p className="title"><span id="hightlight">Clients</span>Reviews</p>
     <TitleDescription 
       icons={false} type="carousel" 
     />
    </div>
    <div className="wrapper-content">
     <p className="title"><span id="hightlight">Personal</span>interests</p>
     <TitleDescription 
       count={INTEREST_CARDS}
       icons={false} type="cards" 
     />
    </div>
   </div>
  )
}

export default Homes;