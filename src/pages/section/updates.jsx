import React from "react"
import metadata from "@/metadata"
import UseSwiper from "@/utils/useSwiper"
import UseListing from "@/utils/useListing"
import CardsIcons from "@/component/widget/cardsIcons"

const Updates = ({ data }) => {
  const UPDATE_STACK = metadata.personal.updates;
  const QUICK_FATCS = metadata.personal.facts;
  
  return (
   <>
    <div 
     className="wrapper-section"
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className="title" id="hightlight">Updates</p>
     </span>
     <div className="wrapper-content">
      <UseSwiper data={UPDATE_STACK} type="updates" view="2" />
     </div>
     <div className="wrapper-content" id="updates">
      <p className="title">Quick Facts</p>
      <UseListing data={QUICK_FATCS} type="awards" />
     </div>
    </div>
   </>
  )
}

export default Updates;