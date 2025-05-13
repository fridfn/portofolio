import React from "react"
import metadata from "@/metadata"
import TitleDescription from "@/component/ui/titleDescription"
import { CardsExperience } from "@/component/widget/cards"

const Education = ({ data }) => {
  return (
   <>
    <div
     className="wrapper-section"
     data-aos="zoom-in-down">
     <span className="greeting">
      <p className="title" id="hightlight">{data.title}</p>
     </span>
     <div className="wrapper-content">
       <CardsExperience />
       <CardsExperience />
       <CardsExperience />
     </div>
    </div>
   </>
  )
}

export default Education;