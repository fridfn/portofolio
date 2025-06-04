import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import TitleDescription from "@/component/ui/titleDescription"
import { CardsExperience } from "@/component/widget/cards"

const Education = ({ data }) => {
  const EDUCATION_STACK = metadata.personal.education;
  
  return (
   <>
    <div
     className="wrapper-section"
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className="title" id="hightlight">{data.title}</p>
     </span>
     <div className="wrapper-content">
      <EachUtils
       of={EDUCATION_STACK}
       render={(value, index) => (
        <CardsExperience data={value} key={index} />
      )}/>
     </div>
    </div>
   </>
  )
}

export default Education;