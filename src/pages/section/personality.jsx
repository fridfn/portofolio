import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import TitleDescription from "@/component/ui/titleDescription"
import { CarouselImage } from "@/component/widget/carousel"

const Personality = ({ data }) => {
   const DESCRIPTION = metadata.personal.personality
  
  const { title: { highlight, normal }, description } = DESCRIPTION
  
  return (
   <>
    <div
    id="introduction"
     className="wrapper-section"
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className="title" id="hightlight">About Personality</p>
     </span>
     <TitleDescription 
      icons={true} type="description" data={description}
      title={{
       highlight: highlight,
       normal: normal
      }}
    />
    <CarouselImage data={{ title: "jk"}}/>
    </div>
   </>
  )
}

export default Personality;