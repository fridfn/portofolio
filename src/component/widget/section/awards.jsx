import React, { useState } from "react"
import metadata from "@/metadata"
import Popup from "@/component/ui/popup"
import UseSwiper from "@/utils/useSwiper"
import UseListing from "@/utils/useListing"

const Awards = ({ data }) => {
  const [popup, isPopup] = useState(false)
  const PROJECT_LIST = metadata.personal.portofolio;
  
  const handlePopup = (value) => {
   isPopup(value)
  }
  
  return (
   <>
    <div
     className='wrapper-section'
     data-aos="zoom-in-down"
     data-aos-duration="400">
     {popup ? (<Popup data={"halo"} />) : (null)}
     <span className="greeting">
      <p className='title' id='hightlight'>Awards</p>
     </span>
     <div className="wrapper-content">
      <p className="title">Certifications</p>
      <UseSwiper data={PROJECT_LIST} type="certificate" view="1" action={handlePopup} />
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