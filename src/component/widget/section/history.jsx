import React from "react"
import metadata from "@/metadata"
import TitleDescription from "@/component/ui/titleDescription"
import { CardsExperience } from "@/component/widget/cards"

const Showcase = () => {
  return (
   <div
    className="wrapper-section"
    data-aos="zoom-in-down"
    data-aos-duration="400">
    <span className="greeting">
     <p className="title" id="hightlight">Welcome!</p>
    </span>
    <CardsExperience />
    <CardsExperience />
    <CardsExperience />
   </div>
  )
}

export default Showcase;