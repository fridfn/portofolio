import React from "react"
import metadata from "@/metadata"
import DOMPurify from "dompurify"
import EachUtils from "@/utils/EachUtils"
import UseSwiper from  "@/utils/useSwiper"
import UseListing from "@/utils/useListing"
import Candles from "@/component/animate/candle"
import Rocket from "@/component/animate/rocket"
import CarouselCards from  "@/component/widget/carousel"

const LogoIcons = ({ type }) => {
  const components = {
   rocket: Rocket,
   candles: Candles
  }
  
  const Component = components[type]
  
  return (
   <div className="box-logo">
    {Component && <Component />}
   </div>
  )
}

const Description = ({ data }) => {
  const { description } = data;
  const sanitizedHTML = DOMPurify.sanitize(data)
  
  return (
   <div className='box-description'>
    <div className='description' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
   </div>
  )
}

const TitleDescription = ({ data, icons, type, count }) => {
  const DATA_REVIEWS = metadata.personal.reviews;
  
  const ArrType = {
   carousel: {
    component: UseSwiper,
    datas: DATA_REVIEWS
   },
   description: {
    component: Description,
    datas: data
   }
  }
  const ResultComponent = ArrType[type]?.component;
  const ResultData = ArrType[type]?.datas;
  
  return (
   <div className='sub-content'>
    <div className='content'>
     {icons && (<LogoIcons type={icons} />)}
     {count ?
      (<UseListing data={count} type="cards"/>) :
      (<ResultComponent data={ResultData} type="cards" />)
     }
    </div>
   </div>
  )
}

export default TitleDescription;