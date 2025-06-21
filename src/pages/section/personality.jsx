import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import UseSwiper from "@/utils/useSwiper"
import Candles from "@/component/animate/candle"
import TitleDescription from "@/component/ui/titleDescription"
import { ProgressMBTI } from "@/component/ui/progress"
import InfiniteScrollCards from "@/component/ui/infiniteScrollCards"

const Personality = ({ data }) => {
  const DESCRIPTION = metadata.personal.personality
  const ABOUT_MBTI = metadata.personal.mbti.about
  const CATEGORY_MBTI = metadata.personal.mbti.category
 
  const { title: { highlight, normal }, description } = DESCRIPTION
  
  return (
   <>
    <div
    id="introduction"
     className="wrapper-section"
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
        <p className="title" id="hightlight">Personality</p>
     </span>
     <div className="wrapper-content">
        <p className="title"><span id="hightlight">Coding</span>impact</p>
        <UseSwiper data={ABOUT_MBTI} type="carouselImage" />
     </div>
     <div className="wrapper-content">
        <p className="title"><span id="hightlight">Personal</span>MBTI</p>
      <div className="wrapper">
         <Candles />
         <ProgressMBTI />
         <TitleDescription 
            type="description" data={description}
         />
      </div>
     </div>
     <div className="wrapper-content">
        <p className="title"><span id="hightlight">MTBI</span>Quote</p>
        <InfiniteScrollCards data={CATEGORY_MBTI} />
     </div>
    </div>
   </>
  )
}

export default Personality;