import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import UseSwiper from  "@/utils/useSwiper"
import UseListing from "@/utils/useListing"
import Rocket from "@/component/animate/rocket"
import CarouselCards from  "@/component/widget/carousel"

const LogoIcons = () => {
  return (
   <div className="box-logo">
    <Rocket />
   </div>
  )
}

const Description = () => {
  return (
   <div className='box-description'>
    <p className='description'>
     I’m a Frontend Developer with <b>over a decade</b> of experience, specializing in <strong>Frontend Development</strong> with some backend work as well. I also have hands-on experience with HTML5, CSS3, JavaScript, and NodeJs in production environments.
     <br></br>
     <br></br>
     This diverse background gives me the flexibility to adapt to a wide range of project needs.
     <br></br>
     <br></br>
     I look forward to collaborating <b>with you!</b>
    </p>
   </div>
  )
}

const TitleDescription = ({ icons, type, title, count }) => {
  const { hightlight, normal } = title;
  const DATA_CLIENTS = metadata.personal.reviews;
  
  const ArrType = {
   carousel: {
    component: UseSwiper,
    datas: DATA_CLIENTS
   },
   description: {
    component: Description,
    datas: "UNKNOWN"
   }
  }
  const ResultComponent = ArrType[type]?.component;
  const ResultData = ArrType[type]?.datas;
  
  return (
   <div className='sub-content'>
    <p className='title'><span id='hightlight'>{hightlight}</span>{normal}</p>
    <div className='content'>
     {icons ? (<LogoIcons />) : (null)}
     {count ?
      (<UseListing component={count} type="cards"/>) :
      (<ResultComponent data={ResultData} type="cards" />)
     }
    </div>
   </div>
  )
}

export default TitleDescription;