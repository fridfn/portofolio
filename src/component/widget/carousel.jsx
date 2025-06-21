import React from "react"
import EachUtils from "@/utils/EachUtils"
import Avatar from "@/component/ui/avatar"
import { getImage } from "@/utils/getImage"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from 'swiper/modules'


const CarouselCards = ({ data }) => {
  const { name, from, comment, avatar, tags } = data;
  return (
   <div className='carousel-box'>
     <div className='bubble'>
       <div className="wrapper">
         <div className="box-image">
          <Avatar name={avatar} />
         </div>
         <span>
          <p className="title">{name}</p>
          <EachUtils
            of={tags}
            render={(tag, index) => (
              <p className="tags">{tag}</p>
            )}
          />
         </span>
       </div>
       <p className='description'>{comment}</p>
     </div>
     { !tags && (
      <div className='wrapper'>
        <Avatar name={avatar} />
        <div className='client-info'>
         <p className='title'>{name}</p>
         <p className='info'>{from}</p>
        </div>
      </div>
     )}
   </div>
 );
}

export const CarouselImage = ({ data }) => {
  const { title: { sub, main }, image, description } = data;
  return (
   <>
    <div className="carousel-image">
     <svg className="waves-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 360"><path fill="#252525" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <span className="header">
       <p className="description">{sub}</p>
       <p className="title">{main}</p>
      </span>
      <div className="box-image">
        <Avatar name={image}/>
      </div>
      <div className="content">
        <p className="description">{description}</p>
      </div>
    </div>
   </>
  )
}



export default CarouselCards