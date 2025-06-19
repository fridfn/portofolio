import React from "react"
import metadata from "@/metadata"
import UseListing from "@/utils/useListing"

const Portofolio = ({ data, handler }) => {
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
      <UseListing data={PROJECT_LIST} type="project" handler={handler} />
     </div>
    </div>
   </>
  )
}

export default Portofolio;