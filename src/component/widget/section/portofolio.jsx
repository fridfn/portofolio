import React from "react"
import UseListing from "@/utils/useListing"
import metadata from "@/metadata"

const Portofolio = ({ data }) => {
  const PROJECT_LIST = metadata.personal.portofolio;
  
  return (
   <>
    <div 
     className="wrapper-section"
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className="title" id="hightlight">Portofolio</p>
     </span>
     <div className="wrapper-content">
      <p className="title">Project</p>
      <UseListing data={PROJECT_LIST} type="project" />
     </div>
    </div>
   </>
  )
}

export default Portofolio;