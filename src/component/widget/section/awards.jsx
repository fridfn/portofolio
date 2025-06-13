import React, { useState } from "react"
import metadata from "@/metadata"
import UseSwiper from "@/utils/useSwiper"
import UseListing from "@/utils/useListing"

const Awards = ({ data, handler }) => {
  const DATA_AWARDS = metadata.personal.awards;
  const DATA_AWARDS_FACT = metadata.personal.awards_facts
  return (
   <>
    <div
     className='wrapper-section'
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className='title' id='hightlight'>Achievements</p>
     </span>
     <div className="wrapper-content">
      <p className="title">Awards</p>
      <UseSwiper data={DATA_AWARDS} type="certificate" view="1" action={handler} />
     </div>
     <div className="wrapper-content"
      id="awards">
      <p className="title"><span id="hightlight">Project </span>Facts</p>
      <UseListing data={DATA_AWARDS_FACT} type="awards" />
     </div>
    </div>
   </>
  )
}

export default Awards;