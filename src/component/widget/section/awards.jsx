import React from "react"
import metadata from "@/metadata"
import UseSwiper from "@/utils/useSwiper"
import UseListing from "@/utils/useListing"

const Awards = ({ data }) => {
  const PROJECT_LIST = metadata.personal.portofolio;
  
  return (
   <>
    <div
     className='wrapper-section'
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className='title' id='hightlight'>Awards</p>
     </span>
     <div className="wrapper-content">
      <p className="title">Certifications</p>
      <UseSwiper data={PROJECT_LIST} type="certificate" view="1" />
     </div>
     <div className="wrapper-content"
      id="awards">
      <p className="title">Awards</p>
      <UseListing component={PROJECT_LIST} type="awards" />
     </div>
    </div>
   </>
  )
}

export default Awards;