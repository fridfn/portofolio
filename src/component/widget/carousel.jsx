import React from "react"
import Avatar from "@/component/ui/avatar"
import avatar from "@/assets/logo/profile_pict.jpg"
import { getImage } from "@/utils/getImage"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const CarouselCards = ({ data }) => {
  const { client, from, comment, avatar } = data;
  return (
   <div className='carousel-box'>
     <div className='bubble'>
       <p className='description'>{comment}</p>
     </div>
     <div className='wrapper'>
      <Avatar name={avatar} />
     <div className='client-info'>
      <p className='title'>{client}</p>
      <p className='info'>{from}</p>
     </div>
    </div>
   </div>
 );
}

export const CarouselImage = ({ data }) => {
  const { title, sub_title, image, description } = data;
  return (
   <>
    <div className="carousel-image">
     <span className="header">
      <p className="description">My Personality</p>
      <p className="title">Advocate (INFJ - A)</p>
     </span>
     <div className="box-image">
      <Avatar name={"avatar"}/>
     </div>
     <div className="content">
      <p className="description">Advocates are quiet visionaries, often serving as inspiring and tireless idealists. These rare types are open-minded and imaginative, applying care and creativity.</p>
     </div>
    </div>
   </>
  )
}



export default CarouselCards