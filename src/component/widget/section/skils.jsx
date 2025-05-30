import React from "react"
import metadata from "@/metadata"
import Banner from "@/component/ui/banner"
import UseSwiper from "@/utils/useSwiper"
import UseListing from "@/utils/useListing"
import Language from "@/component/ui/language"

const Skils = ({ data }) => {
  const PROFESIONAL_STACK = metadata.personal.banner.profesional
  const BACKEND_STACK = metadata.personal.skills.backend
  const FRONTEND_STACK = metadata.personal.skills.frontend
  const OTHER_STACK = metadata.personal.skills.other
  const LANGUAGE_STACK = metadata.personal.language
  
  return (
   <div 
     className="wrapper-section"
     data-aos="zoom-in-down"
     data-aos-duration="300">
    <span className="greeting">
     <p className='title' id='hightlight'>{data.title}</p>
    </span>
    <div className="content-progress">
     <div className="wrapper-content">
      <p className="title">Profesional</p>
      <UseSwiper data={PROFESIONAL_STACK} type="banner" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Backend</p>
      <UseListing component={BACKEND_STACK} type="progress" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Frontend</p>
      <UseListing component={FRONTEND_STACK} type="progress" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Other Skills</p>
      <UseListing component={OTHER_STACK} type="progress" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Languages</p>
      <UseListing component={LANGUAGE_STACK} type="language" />
     </div>
    </div>
   </div>
  )
}

export default Skils;