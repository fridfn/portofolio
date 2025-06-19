import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import UseSwiper from "@/utils/useSwiper"
import TitleDescription from "@/component/ui/titleDescription"

const Personality = ({ data }) => {
   const DESCRIPTION = metadata.personal.personality
   const ABOUT_MBTI = metadata.personal.mbti.about
  
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
     <div className="wrapper-content">
      <p className="title"><span id="hightlight">Coding</span>impact</p>
      <UseSwiper data={ABOUT_MBTI} type="carouselImage" />
     </div>
     <div className="wrapper-content">
      <p className="title"><span id="hightlight">Personal</span>MBTI</p>
      <TitleDescription 
       icons="candles" type="description" data={description}
      />
     </div>
    </div>
   </>
  )
}

export default Personality;