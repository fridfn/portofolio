import React from "react"
import metadata from "@/metadata"
import TitleDescription from "@/component/ui/titleDescription"

const Homes = () => {
  const INTEREST_CARDS = metadata.personal.interests
  const DATA_CLIENTS = metadata.personal.reviews;
  
  return (
   <div 
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
      title={{
       hightlight: "A little bit",
       normal: "about me"
      }}
      icons={true} type="description" 
    />
    <TitleDescription 
      title={{
       hightlight: "Clients ", 
       normal: "testimonials"
      }}
      icons={false} type="carousel" 
    />
    <TitleDescription 
      title={{
       hightlight: "Personal ", 
       normal: "interests"
      }}
      count={INTEREST_CARDS}
      icons={false} type="cards" 
    />
   </div>
  )
}

export default Homes;