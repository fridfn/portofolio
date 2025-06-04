import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import TitleDescription from "@/component/ui/titleDescription"
import { CardsExperience } from "@/component/widget/cards"

const Experience = ({ data }) => {
  const EXPERIENCE_STACK = metadata.personal.experience;
  
  return (
   <div
    className="wrapper-section"
    data-aos="zoom-in-down"
    data-aos-duration="300">
    <span className="greeting">
     <p className="title" id="hightlight">Experience</p>
    </span>
    <div className="wrapper-content">
     <EachUtils
      of={EXPERIENCE_STACK}
      render={(value, index) => (
       <CardsExperience data={value} key={index} />
     )}/>
    </div>
   </div>
  )
}

export default Experience;