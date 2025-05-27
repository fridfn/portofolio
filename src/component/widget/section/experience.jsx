import React from "react"
import metadata from "@/metadata"
import TitleDescription from "@/component/ui/titleDescription"
import { CardsExperience } from "@/component/widget/cards"

const Experience = () => {
  return (
   <div
    className="wrapper-section"
    data-aos="zoom-in-down"
    data-aos-duration="300">
    <span className="greeting">
     <p className="title" id="hightlight">Experience</p>
    </span>
    <CardsExperience />
    <CardsExperience />
    <CardsExperience />
   </div>
  )
}

export default Experience;