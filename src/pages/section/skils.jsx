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
     <p className='title' id='hightlight'>Skills</p>
    </span>
    <div className="content-progress">
     <div className="wrapper-content" id="wrapper-content-banner">
      <p className="title">Profesional</p>
      <UseSwiper data={PROFESIONAL_STACK} type="banner" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Backend</p>
      <UseListing data={BACKEND_STACK} type="progress" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Frontend</p>
      <UseListing data={FRONTEND_STACK} type="progress" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Other Skills</p>
      <UseListing data={OTHER_STACK} type="progress" />
     </div>
     <div className="wrapper-content" id="skills">
      <p className="title">Languages</p>
      <UseListing data={LANGUAGE_STACK} type="language" />
     </div>
    </div>
   </div>
  )
}

export default Skils;